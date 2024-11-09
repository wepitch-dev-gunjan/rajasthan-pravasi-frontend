import React from 'react'
import './style.scss'
import MockImage from '../../../assets/600x300.png'
import Flower from '../../../assets/flower.png'


const InfoSection = () => {
  return (
    <section className="info-section">
      <h2>What is Pravasi Rajasthan?</h2>
      <p>
        Pravasi Rajasthan is a community-driven initiative aimed at helping Rajasthani families living across India. 
        We understand the emotional and financial burden that comes with the loss of a loved one, especially when far from home. 
        With a small monthly subscription, we ensure that your family receives financial support in case of an untimely passing. 
        The initiative is further backed by the Rajasthani government, offering you peace of mind no matter where life takes you. 
        Beyond financial security, Pravasi Rajasthan fosters a sense of belonging among Rajasthani families spread across India.
      </p>
      <img className='flowerImage' src={Flower} alt="new" />
      <div className="video-container">
        <img src={MockImage} alt="Video Placeholder" />
        <button className="play-button">▶</button>
      </div>
      <button className="read-more-btn">Read More About Us</button>
    </section>
  )
}

export default InfoSection