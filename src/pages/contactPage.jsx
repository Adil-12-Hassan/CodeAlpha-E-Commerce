import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../global.css";
import "../styles/pages/contactPage.css";
import contactImage from "../assets/contact-bc.jpeg";

function LocationIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
        >
            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
        </svg>
    );
}

function EmailIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
        >
            <rect x="3" y="5" width="18" height="14" rx="1" />
            <path d="m3 7 9 6 9-6" />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
        >
            <path d="M6.5 3.5 9 3l2 5-2.5 1.5a15 15 0 0 0 6.5 6.5l1.5-2.5 5 2-.5 2.5c-.3 1.5-1.7 2.5-3.2 2.5C10.5 20.5 3.5 13.5 3.5 5.7c0-1.5 1.5-2 3-2.2Z" />
        </svg>
    );
}

function ClockIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
        >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
        </svg>
    );
}

function ArrowIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="19"
            height="19"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
        >
            <path d="M5 12h13" />
            <path d="m13 6 6 6-6 6" />
        </svg>
    );
}

function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="contact-page">
                <div className="contact-background-overlay" />
                <div className="contact-container">
                    <section className="contact-information">
                        <div className="contact-heading">
                            <h1>GET IN <span>TOUCH</span></h1>
                            <div className="contact-gold-line" />
                        </div>
                        <p className="contact-introduction">We would love to hear from you. Whether you have a question about our timepieces, need assistance or just want to say hello — we're here for you.</p>
                        {/* BOUTIQUE */}
                        <div className="contact-detail">
                            <div className="contact-detail-icon"><LocationIcon /></div>
                            <div className="contact-detail-content">
                                <h3>VISIT OUR BOUTIQUE</h3>
                                <p>123 Timekeeper Avenue<br />Geneva, Switzerland 1204</p>
                            </div>
                        </div>
                        {/* EMAIL */}
                        <div className="contact-detail">
                            <div className="contact-detail-icon"><EmailIcon /></div>
                            <div className="contact-detail-content">
                                <h3>EMAIL US</h3>
                                <p>hello@zarrwatches.com</p>
                            </div>
                        </div>
                        {/* PHONE */}
                        <div className="contact-detail">
                            <div className="contact-detail-icon"><PhoneIcon /></div>
                            <div className="contact-detail-content">
                                <h3>CALL US</h3>
                                <p>+41 22 123 4567</p>
                            </div>
                        </div>
                        {/* HOURS */}
                        <div className="contact-detail">
                            <div className="contact-detail-icon"><ClockIcon /></div>
                            <div className="contact-detail-content">
                                <h3>HOURS</h3>
                                <p>Monday – Friday: 9AM – 6PM <br /> Saturday: 10AM – 4PM</p>
                            </div>
                        </div>
                        {/* SOCIAL */}
                        <div className="contact-social">
                            <h3>FOLLOW US</h3>
                            <div className="contact-social-links">
                                <a href="https://facebook.com" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
                                <a href="https://instagram.com" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
                                <a href="https://youtube.com" aria-label="YouTube"><i className="fa-brands fa-youtube" /></a>
                                <a href="https://x.com" aria-label="X"><i className="fa-brands fa-x-twitter" /></a>
                            </div>
                        </div>
                    </section>
                    <section className="contact-form-wrapper">
                        <form className="contact-form">
                            <div className="form-heading">
                                <h2>SEND US A MESSAGE</h2>
                                <div className="form-gold-line" />
                                <p className="form-introduction">Tell us how we can help and our team will get back to you shortly.</p>
                            </div>
                            {/* NAME */}
                            <div className="form-group">
                                <label htmlFor="name">NAME</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" />
                            </div>
                            {/* EMAIL */}
                            <div className="form-group">
                                <label htmlFor="email">EMAIL</label>
                                <input type="email" id="email" name="email" placeholder="Your Email" />
                            </div>
                            {/* SUBJECT */}
                            <div className="form-group">
                                <label htmlFor="subject">SUBJECT</label>
                                <input type="text" id="subject" name="subject" placeholder="Subject" />
                            </div>
                            {/* MESSAGE */}
                            <div className="form-group">
                                <label htmlFor="message">MESSAGE</label>
                                <textarea id="message" name="message" placeholder="Your Message" rows="6" />
                            </div>
                            {/* BUTTON */}
                            <button type="submit" className="contact-submit">
                                <span>SEND MESSAGE</span>
                                <ArrowIcon />
                            </button>
                            <p className="form-response-note">We usually respond within one business day.</p>
                        </form>
                    </section>
                    <div
                        className="contact-image-panel"
                        style={{ backgroundImage: `url(${contactImage})` }}
                        aria-hidden="true"
                    />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default ContactPage;