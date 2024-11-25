import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import PageHero from '../../components/pageHero'
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import Flower from "../../assets/flower.png"
import { FaPhone } from "react-icons/fa6";

import { FaLocationDot } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";


import './style.scss'

const Contact = () => {
  return (
    <>
        <Header/>
    <PageHero message="Contact"/>
    <div className="contactPageContainer">
    <img class="flowerImage" src={Flower} alt="new"/>
      <div className="contactPage">
        <div className="contactPageLeft">
          <h2>Get In Touch</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deleniti cupiditate facilis ratione tempora dolor eligendi ab</p>
          <h3>Rajasthan Pravasi</h3>
          <ul className="contactInfo">
            <li className='contactInfoList'><span><FaLocationDot  color='white'/></span>  Plot No. 23, Saraswati Colony Near Moti Doongri Temple Tonk Road, Jaipur - 302015</li>
            <li className='contactInfoList'><span><FaPhone  color='white'/></span>+91 98234 56789</li>
            <li className='contactInfoList'><span><FaMessage color='white'/></span>rajasthan.pravasi123@example.com</li>
          </ul>
          <ul className="SocialLinks">
            <li><a href=""> <FaFacebookF  size="20px" color='white'/></a></li>
            <li><a href=""> <BsTwitterX  size="20px" color='white'/></a></li>
            <li><a href=""> <FaInstagram  size="20px" color='white'/></a></li>
            <li><a href=""> <FaYoutube  size="20px" color='white'/></a></li>
          </ul>
        </div>
        <div className="contactPageRight">
          <div className="contactPageRightContainer">
          <form className='contactForm' action="">


              
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input className='commonInput' type="text" id="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input className='commonInput' type="email" id="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact Number</label>
              <input className='commonInput' type="number" id="number" placeholder="Number" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              {/* <input className='commonInput' type="number" id="message" placeholder="Number" /> */}
              <textarea className='commonInput' name="message" id="message"  rows='4'></textarea>
            </div>
            
            <button type="submit" placeholder="Write here..." className="submit-button joinNowButton">Submit</button>
            </form>
          </div>
        </div>

      </div>
    </div>

    <Footer/>
    </>
  )
}

export default Contact