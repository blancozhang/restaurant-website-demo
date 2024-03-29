import React from "react";
import "../style/FooterNavigation.css"
import Logo2 from "../Little-Lemon-logos/Asset_20@4x.png";
import { Link } from "react-router-dom";

const FooterNavigation = ()=>{
    return(
        <footer>
        <div>
            <img src={Logo2} alt='logo2' className="footer-logo" />
        </div>
        <div className="footer-nav" >
            <h2>Doormat Navigation</h2>
                <ul >
                    <li><Link  to = "/">HOME</Link></li>
                    <li><a  href = "#ABOUT">ABOUT</a></li>
                    <li><a  href = "#MENU">MENU</a></li>
                    <li><Link  to = "/bookingPage">RESERVATION</Link></li>
                    <li><a  href = "#OL-ORDER">ORDER ONLINE</a></li>
                    <li><a  href = "#LOCATION">LOCATION</a></li>
                    <li><a  href = "#LOGIN">LOGIN</a></li>
                </ul>
        </div>
        <div className="contact">
            <h2>Contact</h2>
                <ul >
                    <li><a  href = "#address">ADDRESS</a></li>
                    <li><a  href = "#phone-number">PHONE</a></li>
                    <li><a  href = "#email">EMAIL</a></li>
                </ul>
        </div>
        <div className="social-media">
            <h2>Social Media Links</h2>
                <ul >
                    <li><a  href = "#address">INSTAGRAM</a></li>
                    <li><a  href = "#phone-number">FACEBOOK</a></li>
                    <li><a  href = "#email">TIKTOK</a></li>
                </ul>
        </div>
        </footer>
    );
}


export default FooterNavigation;