import React from 'react'
import './FAB.css'
function FAB() {
    return (
        <button
            className="fab-scroll-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <i className="fa-solid fa-circle-arrow-up"></i>
        </button>

    )
}

export default FAB