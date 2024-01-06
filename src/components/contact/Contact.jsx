import React from 'react'
import './contact.css'
import logo from '../../assets/logo.svg'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (

    <div className="contact">
      <div className="info-container">
        <div className="info">
          <img src={logo} alt="Logo" className="logo" />
          <div className="company-info">
            <h2>Contractors</h2>
            <p>Phoenix Group</p>
          </div>
          <p className="description">
          As leaders, we recognize the profound impact construction can have on the environment. 
          </p>
          <div className="social-icons">
          <FaFacebook />
            <FaTwitter />
            <FaGoogle />
            <FaInstagram />
          </div>
        </div>

        <div className="useful-links">
          <h3>Useful Links</h3>
          <ul>
            <li>Get To Know About Us</li>
            <li>Contact Us</li>
            <li>Be Part Of Us</li>
            <li>Fututre Projects</li>
            <li>Our Company</li>
          </ul>
        </div>

        <div className="contact-us">
          <h3>Contact Us</h3>
          <ul>
            <li>12th Street, City Park, Udupi</li>
            <li>+91 9876543758</li>
            <li>contractors@gmail.com</li>
          </ul>
        </div>

        <div className="newsletter">
          <h3>Newsletter</h3>
          <p>
            For more info enter your email-id and we will get back to you with our latest projects and ideas so that we can grow together.
          </p>
          <div className="subscribe">
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact