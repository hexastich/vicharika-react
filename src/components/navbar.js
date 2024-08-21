import React from 'react'

import PropTypes from 'prop-types'
import './navbar.css'

const Navbar = (props) => {
  console.log(props);

  return (
    <header className="navbar-container">
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="navbar-image1"
        />
        <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
          <nav className="navbar-links">
          <a href={props.action1}>
            <span className="thq-body-small thq-link">{props.link1}</span>
          </a>
            <span className="thq-body-small thq-link">{props.link2}</span>
            <a href={props.action3}>
              <span className="thq-body-small thq-link">{props.link3}</span>
            </a>
            <span className="thq-body-small thq-link">
              <a href="#ContactUs">{props.link4}</a>
            </span>
            <span className="thq-body-small thq-link">{props.link5}</span>
          </nav>
          <div className="navbar-buttons">
            <button className="navbar-action1 thq-button-filled thq-button-animated">
              <span className="thq-body-small">Login</span>
            </button>
            <button className="navbar-action2 thq-button-outline thq-button-animated">
              <span className="thq-body-small">Register</span>
            </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-nav">
            <div className="navbar-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar-logo"
              />
              <div data-thq="thq-close-menu" className="navbar-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar-links1">
              <span className="thq-body-small thq-link">{props.link1}</span>
              <span className="thq-body-small thq-link">{props.link2}</span>
              <span className="thq-body-small thq-link">{props.link3}</span>
              <span className="thq-body-small thq-link">{props.link4}</span>
              <span className="thq-body-small thq-link">{props.link5}</span>
            </nav>
          </div>
          <div className="navbar-buttons1">
            <button className="thq-button-filled">Login</button>
            <button className="thq-button-outline">Register</button>
          </div>
        </div>
      </header>
    </header>
  );
}

Navbar.defaultProps = {
  link1: 'Home',
  action1: '/',
  link2: 'Complaints',
  action2: '/complaints',
  link3: 'About Us',
  action3: '/about',
  link4: 'Contact Us',
  link5: 'Blog',
  logoAlt: 'Complaints Against Government',
  logoSrc: '/assets/images/logo.png',
}

Navbar.propTypes = {
  link1: PropTypes.string,
  action1: PropTypes.string,
  action2: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  action3: PropTypes.string,
  link4: PropTypes.string,
  link5: PropTypes.string,
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
}

export default Navbar
