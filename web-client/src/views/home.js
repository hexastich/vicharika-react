import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Slider from '../components/slider'
import EasyComplaint from '../components/easy-complaint'
import YourVoice from '../components/your-voice'
import ComplaintFeatures from '../components/complaint-features'
import Pricing from '../components/pricing'
import AccountSteps from '../components/account-steps'
import Testimonial from '../components/testimonial'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Vicharika: Voice Your Concerns About Government Issues in India</title>
      </Helmet>
      <Navbar></Navbar>
      <Slider></Slider>
      <EasyComplaint></EasyComplaint>
      <YourVoice></YourVoice>
      <ComplaintFeatures></ComplaintFeatures>
      <Pricing></Pricing>
      <AccountSteps></AccountSteps>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer name="footer"></Footer>
    </div>
  )
}

export default Home
