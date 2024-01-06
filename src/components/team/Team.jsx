import React from 'react'
import './team.css'
import pic1 from '../../assets/team1.jpg'
import pic2 from '../../assets/team2.jpg'
import pic3 from '../../assets/team3.jpg'
import pic4 from '../../assets/team4.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Team = () => {
  return (

    <div className="team">
      <div className="team-heading">
        <h5 className="subheading">Our Team</h5>
        <h2 className="main-heading">Meet Our Team Members</h2>
      </div>
      <div className="team-members">
        <div className="member">
          <img src={pic1} alt="Employee 1" className="employee-photo" />
          <h4 className="designation">Founder & CEO</h4>
          <p className="name">Alex Mathias</p>
          <div className="social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaGoogle />
            <FaInstagram />
          </div>
        </div>

        <div className="member">
          <img src={pic2} alt="Employee 1" className="employee-photo" />
          <h4 className="designation">Managing Director</h4>
          <p className="name">John Dias</p>
          <div className="social-icons">
          <FaFacebook />
          <FaTwitter />
          <FaGoogle />
          <FaInstagram />
          </div>
        </div>

        <div className="member">
          <img src={pic3} alt="Employee 1" className="employee-photo" />
          <h4 className="designation">Project Manager</h4>
          <p className="name">Rakesh Shetty</p>
          <div className="social-icons">
          <FaFacebook />
          <FaTwitter />
          <FaGoogle />
          <FaInstagram />
          </div>
        </div>

        <div className="member">
          <img src={pic4} alt="Employee 1" className="employee-photo" />
          <h4 className="designation">Site Manager</h4>
          <p className="name">Priya Mac</p>
          <div className="social-icons">
          <FaFacebook />
          <FaTwitter />
          <FaGoogle />
          <FaInstagram />
          </div>
        </div>

      </div>
    </div>
  );
};



export default Team