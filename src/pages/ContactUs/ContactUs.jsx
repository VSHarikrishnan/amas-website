// src/pages/ContactUs/ContactUs.jsx
// ============================================================
// CONTACT US — Adventure NGO
// Switch import to '../../api/api' when backend is ready.
// ============================================================

import React, { useState } from 'react';
import { submitContactForm } from '../../api/MockData';
import './ContactUs.css';

// ── Contact detail items (static — no backend needed) ────────
const CONTACT_DETAILS = [
    {
        id: 1,
        icon: 'fa-solid fa-envelope',
        label: 'Email',
        display: 'adventureamas@gmail.com',
        href: 'mailto:adventureamas@gmail.com',
    },
    {
        id: 2,
        icon: 'fa-solid fa-phone',
        label: 'Phone',
        display: '+91 94461 01056',
        href: 'tel:+919446101056',
    },
    {
        id: 3,
        icon: 'fa-solid fa-location-dot',
        label: 'Location',
        display: null, // rendered as JSX below
        href: null,
    },
];

// ============================================================
// COMPONENT
// ============================================================
const ContactUs = () => {
    const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
    const [status, setStatus] = useState(null); // 'success' | 'error' | null
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);
        try {
            await submitContactForm(form);
            setStatus('success');
            setForm({ name: '', phone: '', email: '', message: '' });
        } catch {
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contact-bg-section">
            <div className="contact-container">
                <div className="contact-row">

                    {/* ── LEFT: details ── */}
                    <div className="contact-left">

                        <span className="contact-eyebrow">Get In Touch</span>

                        <div className="contact-heading">
                            <h2>
                                Ready to Book
                                <span className="thin">your adventure with us?</span>
                            </h2>
                        </div>

                        <div className="contact-details">

                            {/* Email */}
                            <div className="contact-box">
                                <div className="contact-icon-wrap">
                                    <i className="fa-solid fa-envelope" />
                                </div>
                                <div className="text">
                                    <h4>Email</h4>
                                    <p>
                                        <a href="mailto:adventureamas@gmail.com">adventureamas@gmail.com</a>
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="contact-box">
                                <div className="contact-icon-wrap">
                                    <i className="fa-solid fa-phone" />
                                </div>
                                <div className="text">
                                    <h4>Phone</h4>
                                    <p>
                                        <a href="tel:+919446101056">+91 94461 01056</a>
                                    </p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="contact-box">
                                <div className="contact-icon-wrap">
                                    <i className="fa-solid fa-location-dot" />
                                </div>
                                <div className="text">
                                    <h4>Location</h4>
                                    <p>
                                        <strong>Academy for Mountaineering and Adventure Sports</strong><br />
                                        Neyyattinkara, Trivandrum,<br />
                                        Kerala, India — PIN 695121
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* ── RIGHT: form ── */}
                    <div className="contact-right">
                        <div className="form-wrapper">
                            <h3>Quick Message</h3>
                            <p>Need help with your queries or booking?</p>

                            <form className="contact-form" onSubmit={handleSubmit}>

                                <div className="contact-form-row">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />

                                <textarea
                                    name="message"
                                    placeholder="Write your message here…"
                                    rows="4"
                                    value={form.message}
                                    onChange={handleChange}
                                />

                                <button type="submit" disabled={loading}>
                                    {loading ? 'Sending…' : 'Send Message →'}
                                </button>

                                {status === 'success' && (
                                    <p className="form-success">
                                        <i className="fa-solid fa-circle-check" /> Message sent! We'll get back to you shortly.
                                    </p>
                                )}
                                {status === 'error' && (
                                    <p className="form-error">Something went wrong. Please try again.</p>
                                )}

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactUs;