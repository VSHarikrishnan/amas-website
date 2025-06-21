import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <section className="contact-bg-section">
            <div className="container">
                <div className="row">
                    {/* Contact Details */}
                    <div className="contact-left">
                        <div className="contact-heading">
                            <h2>Ready to Book<br /><span className="thin">your adventure with us?</span></h2>
                        </div>

                        <div className="contact-details">
                            <div className="contact-box">
                                <div className="icon">📧</div>
                                <div className="text">
                                    <h4>Email</h4>
                                    <p><a href="mailto:adventureamas@gmail.com">adventureamas@gmail.com</a></p>
                                </div>
                            </div>

                            <div className="contact-box">
                                <div className="icon">📞</div>
                                <div className="text">
                                    <h4>Phone</h4>
                                    <p><a href="tel:+919446101056">+91 94461 01056</a></p>
                                </div>
                            </div>

                            <div className="contact-box">
                                <div className="icon">📍</div>
                                <div className="text">
                                    <h4>Location</h4>
                                    <p>
                                        <strong>Academy for Mountaineering and Adventure Sports</strong><br />
                                        Neyyattinkara, Trivandrum,<br />
                                        Kerala, India<br />
                                        PIN: 695121
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-right">
                        <div className="form-wrapper">
                            <h3>Quick Message</h3>
                            <p>Need help with your queries or booking?</p>
                            <form className="contact-form">
                                <input type="text" placeholder="Full Name" required />
                                <input type="tel" placeholder="Phone" required />
                                <input type="email" placeholder="Email" required />
                                <textarea placeholder="Write Message" rows="4" />
                                <button type="submit">Send Message →</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
