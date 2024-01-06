import React from 'react'
import './header.css'
import Logo from '../../assets/logo.svg'
import Work from '../../assets/workers.jpg'
import { FaSearch } from "react-icons/fa";

const header = () => {
  return (

    <header className="header">
      <div className="top-left">
        <img src={Logo} alt="Logo" />
        <div className="company-info">
          <h2>Contractors</h2>
          <h1>Phoenix Group</h1>
        </div>
      </div>
      <div className="top-right">
        <nav className="menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><FaSearch /></li>
          </ul>
        </nav>
        
      </div>
      <div className="bottom-left">
        <div className="text-content">
          <h1>Innovation</h1>
          <h3>Construction</h3>
          <p>
          In the dynamic world of construction,
           the key to success lies in the harmonious 
           blend of innovation and a commitment to establishing solid foundations. This duality, encapsulated
            in the mantra "Innovative Solutions,
            Solid Foundations," serves as the guiding principle for our endeavors in the construction industry.
            In the dynamic world of construction, the key to
             success lies in the harmonious blend of 
             innovation and a commitment to establishing
              solid foundations. This duality, encapsulated
               in the mantra "Innovative Solutions, Solid Foundations," serves as the guiding principle for our endeavors 
               in the construction industry.
          </p>
          <button className="read-more">Read More</button>
        </div>
      </div>
      <div className="bottom-right">
        <img src={Work} alt="no" />
      </div>
    </header>
  );
};

export default header