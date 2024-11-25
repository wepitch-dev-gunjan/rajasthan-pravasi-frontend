import {React, useState} from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import PageHero from '../../components/pageHero'
import BenefitPaidUser from '../home/benefitPaidUser'
import './style.scss'
import flowerDesign from '../../assets/flowerDesign.png'
import { FaUser } from "react-icons/fa";
import { MdCardMembership } from "react-icons/md";


const Membership = () => {
    const [isYearly, setIsYearly] = useState(false);
  return (
    <>
    <Header/>
    <PageHero message='membership'/>
    {/* <div className="membershipSection">
        <div className="membershipContainer">
            <p>case it's true, our prices are even lower in yearly plans!</p>
        </div>
    </div> */}


<div className="membership-container">
    <img className='flowerDesign' src={flowerDesign} alt="" />
    <p>case it's true, our prices are even lower in yearly plans!</p>
      {/* Toggle Switch */}
      <div className="toggle-switch">
        <label className="toggle-label">
          <span className={isYearly ? "" : "active"}>Monthly</span>
          <div
            className="slider-wrapper"
            onClick={() => setIsYearly((prevState) => !prevState)}
          >
            <div className={`slider ${isYearly ? "yearly" : ""}`}></div>
          </div>
          <span className={isYearly ? "active" : ""}>Yearly</span>
        </label>
      </div>

      {/* Membership Card */}
      <div className="membership-card">
        <h2>Premium Membership</h2>
        <p>Unlock Exclusive Benefits and features</p>
        <div className="price-section">
          <span className="price"> <FaUser /> Individual</span>
          <span className="price"><MdCardMembership />

            {isYearly ? "Rs999/year" : "Rs99/month"}
          </span>
        </div>
        <ul className="benefits-list">
          <li>1 user account</li>
          <li>10 transactions per month</li>
          <li>Members chat free</li>
          <li>Contact all members</li>
          <li>Send private messages</li>
        </ul>
        <button className="get-started-button">Get started</button>
      </div>
    </div>


    <BenefitPaidUser/>

    <Footer/>
    </>
  )
}

export default Membership