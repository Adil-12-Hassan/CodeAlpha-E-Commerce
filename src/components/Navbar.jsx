import React from "react";
import ZARR from "../assets/ZARR.png"
import "../styles/components/navbar.css"
import "../../src/global.css"

function Navbar() {
    return (
        // Left Side Logo
        <header className="navbar">
            <div className="navbar-logo">
                <a href="/"><img src={ZARR} alt="ZARR LOGO" /></a>
            </div>
            {/* Main Navbar */}
            <nav className="navbar-menu">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/collection">Collection</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/journal">Journal</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            {/* Right Side Logos */}
            <div className="navbar-actions">
                <button className="navbar-action" aria-label="Search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <button className="navbar-action" aria-label="Account">
                    <i className="fa-regular fa-user"></i>
                </button>
                <button className="navbar-action" aria-label="SHopping Cart">
                    <i className="fa-solid fa-bag-shopping"></i>
                    <span className="cart-count">0</span>
                </button>
            </div>
        </header>
    )
}

export default Navbar;