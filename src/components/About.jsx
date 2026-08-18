import React from "react";
import Crown from "../../src/assets/crown.jpeg";
import Diamond from "../../src/assets/diamond.png";
import Security from "../../src/assets/security.png";
import AboutImage from "../../src/components/about-watch.png";

function About() {
    return (
        <section className="about">
            <div className="about-content">
                <span className="about-label">ABOUT ZARR</span>
                <h2 className="about-heading">LEGACY. PASSION.<br />PERFECTION.</h2>
                <p className="about-description">
                    At ZARR, we believe a watch is a reflection of your
                    journey. Every detail is thoughtfully designed to
                    combine timeless design with modern innovation.
                </p>
                <a href="/about" className="about-button">LEARN MORE ABOUT US<span>→</span></a>
            </div>
            <div className="about-divider"></div>
            <div className="about-stats">
                {/* Stat 01 */}
                <div className="stat">
                    <img src={Crown} alt="Crown Icon" className="stat-icon" />
                    <div className="stat-content">
                        <span className="stat-number">100+</span>
                        <span className="stat-label">PREMIUM MODELS</span>
                    </div>
                </div>
                {/* Stat 02 */}
                <div className="stat">
                    <img src={Diamond} alt="Diamond Icon" className="stat-icon" />
                    <div className="stat-content">
                        <span className="stat-number">50K+</span>
                        <span className="stat-label">HAPPY CUSTOMERS</span>
                    </div>
                </div>
                {/* Stat 03 */}
                <div className="stat">

                    <img src={Security} alt="Warranty Icon" className="stat-icon"/>
                    <div className="stat-content">
                        <span className="stat-number">2</span>
                        <span className="stat-label">YEARS WARRANTY</span>
                    </div>
                </div>
            </div>
            {/* Decorative Watch Image */}
            <div className="about-image-wrapper"><img src={AboutImage} alt="ZARR luxury watch" className="about-image"/></div>
        </section>
    );
}

export default About;