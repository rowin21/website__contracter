import React from 'react'
import './blog.css'
import backgroundImage from '../../assets/blog2.jpg';
const Blog = () => {
  return (

    <div className="blog">
      <div className="blog-header">
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <p className="quote">Looking for Affordability and Comfort</p>
          <p className="subquote">Be Part of Our Next Projects</p>
          <button className="register-btn">
            Register <span className="arrow">»</span>
          </button>
        </div>
      </div>
     
    </div>
  );
};








export default Blog