import React from "react";
import { Helmet } from 'react-helmet'

import "./about.css";
import Footer from '../components/footer'
import Navbar from '../components/navbar'

const About = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Vicharika: Voice Your Concerns About Government Issues in India</title>
      </Helmet>
      <Navbar></Navbar>

      <div className="contact-contact20 thq-section-padding">
        <h1>About Us</h1>
        <p>
          Welcome to Vicharika, a platform dedicated to voicing your concerns
          about government issues in India. Our mission is to provide a space
          where citizens can share their thoughts and experiences to drive
          positive change.
        </p>
        <h2>Our Mission</h2>
        <p>
          At Vicharika, we believe in the power of collective voices to bring
          about change. Our platform is designed to empower citizens by providing
          a space to raise their concerns and hold the government accountable. We
          aim to bridge the gap between the public and the authorities, ensuring
          that every voice is heard and every complaint is addressed.
        </p>
        <h2>What We Offer</h2>
        <ul>
          <li>
            Submit Complaints: Easily submit your complaints about various
            government issues.
          </li>
          <li>
            Anonymous Reporting: Option to report issues anonymously to ensure
            your privacy.
          </li>
          <li>Browse Complaints: View complaints submitted by other users.</li>
          <li>
            Track Progress: Track the status of your complaints and receive
            updates.
          </li>
          <li>
            Community Support: Engage with other users, share experiences, and
            find support.
          </li>
        </ul>
        <h2>Contact Us</h2>
        <p>For any inquiries or support, please contact us at:</p>
        <p>
          Email: <a href="mailto:contact@vicharika.in">contact@vicharika.in</a>
          <br />
          Phone: +91-9458031609
          <br />
          Address: Safina Tower, Qila Road, Aligarh, Uttar Pradesh, India, 202001
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
