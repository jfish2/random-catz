import React from 'react'
import './App.css'

function Footer() {
    const today = new Date();
    return (
        <div className="footer_main">
            <footer>&copy; JF {today.getFullYear()}</footer>
        </div>
    )
}

export default Footer