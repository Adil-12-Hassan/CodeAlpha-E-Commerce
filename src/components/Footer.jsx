import React from "react";
import ZARR from "../../src/assets/ZARR.png"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="footer-brand">
                    <img src={ZARR} alt="ZARR-Image" />
                    <p>TIMELESS ELEGANCE. CRAFTED TO PERFEXTION</p>
                </div>
                <div className="footer-links">
                    <h3>SHOP</h3>
                    <ul>
                        <li><a href="">All Watches</a></li>
                        <li><a href="">Men's Watches</a></li>
                        <li><a href="">Women's Watches</a></li>
                        <li><a href="">Limited Edition</a></li>
                        <li><a href="">Accessories</a></li>
                    </ul>
                </div>
                <div className="footer-customer-care">
                    <h3>CUSTOMER CARE</h3>
                    <ul>
                        <li><a href="">Track Your Order</a></li>
                        <li><a href="">Warranty</a></li>
                        <li><a href="">Returns & Exchanges</a></li>
                        <li><a href="">FAQs</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-company">
                    <h3>COMPANY</h3>
                    <ul>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Our Craftsmanship</a></li>
                        <li><a href="">Sustainability</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Press</a></li>
                    </ul>
                </div>
                <div className="footer-extras">
                    <h3>EXTRA</h3>
                    <ul>
                        <li><a href="">Gift Cards</a></li>
                        <li><a href="">Watch Guide</a></li>
                        <li><a href="">Size GUide</a></li>
                        <li><a href="">Store Locater</a></li>
                    </ul>
                </div>
                <div className="footer-contact"></div>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-bottom">
                <p className="footer-left">&copy; 2026 ZARR. All Rights Reserved.</p>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Services</a></li>
                    <li><a href="#">Cookies Policy</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;