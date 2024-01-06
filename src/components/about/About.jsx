import React from 'react';
import './about.css';
import work1 from '../../assets/about1.jpg';
import work2 from '../../assets/about3.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="left">
        <div className="image-container">
          <img src={work1} alt="First " className="image yellow-filter" />
          <img src={work2} alt="Second " className="image overlap" />
        </div>
      </div>
      <div className="right">
        <h3 className="subheading our-team">About Phonix Group</h3>

        <h3 className="subheading leaders">We are the Leaders in Construction</h3>
        <div className="paragraph">
          <p className="about-text">
          At the forefront of our leadership is a relentless pursuit of innovation. The construction industry is evolving, and we recognize the imperative to stay ahead. 
          </p>
        </div>
        <div className="paragraph with-line">
          <div className="yellow-line horizontal"></div>
          <div className="vertical-line"></div>
          <p className="about-text">
          In construction, the mark of true leadership is an unwavering commitment to quality. From the initial design phase to the final touches of construction, we adhere to the highest standards.
          </p>
        </div>
        <div className="read-more-container">
          <button className="read-more">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
