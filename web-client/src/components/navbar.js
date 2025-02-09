import React from 'react'
import PropTypes from 'prop-types'
import './navbar.css'

const Navbar = (props) => {
  console.log(props);

  return (
    <header className="navbar-container">
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <img
          alt='Complaints Against Government'
          src='/assets/images/logo.png'
          className="navbar-image1"
        />
        <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
          <nav className="navbar-links">
          <a href='/'>
            <span className="thq-body-small thq-link">Home</span>
          </a>
            <a href='/complanints'><span className="thq-body-small thq-link">Complanints</span></a>
            <a href='/about'>
              <span className="thq-body-small thq-link">About Us</span>
            </a>
            <span className="thq-body-small thq-link">
              <a href="#ContactUs">Contact Us</a>
            </span>
            <span className="thq-body-small thq-link">Blog</span>
          </nav>
          <div className="navbar-buttons">
            <button className="navbar-action1 thq-button-filled thq-button-animated">
              <span className="thq-body-small"><a href='/login'>Login</a></span>
            </button>
            <button className="navbar-action2 thq-button-outline thq-button-animated">
              <span className="thq-body-small"><a href='/register'>Register</a></span>
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
                alt='Complaints Against Government'
                src='/assets/images/logo.png'
                className="navbar-logo"
              />
              <div data-thq="thq-close-menu" className="navbar-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar-links1">
              <span className="thq-body-small thq-link">Home</span>
              <span className="thq-body-small thq-link">Complanints</span>
              <span className="thq-body-small thq-link">About Us</span>
              <span className="thq-body-small thq-link">Contact Us</span>
              <span className="thq-body-small thq-link">Blog</span>
            </nav>
          </div>
          <div className="navbar-buttons1">
            <button className="thq-button-filled"><span className="thq-body-small"><a href='/login'>Login</a></span></button>
            <button className="thq-button-outline"><span className="thq-body-small"><a href='/register'>Register</a></span></button>
          </div>
        </div>
      </header>
    </header>
  );
}

export default Navbar
