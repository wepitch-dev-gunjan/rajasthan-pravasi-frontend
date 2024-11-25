import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import PageHero from '../../components/pageHero'
import AboutPravasiImage from './../../assets/collageimage.png'
import './style.scss'
import Sceenry from './../../assets/screnery.jpg'
import Profile from './../../assets/profile.png'
import SuccessReview from '../home/successStory'

const AboutUs = () => {
  return (
    <>
    <Header/>
    <PageHero message="About Us"/>
    
    
    <div className="aboutPravasi">
      <div className="aboutPravasiContainer">
        <div className="aboutPravasiLeft">
          <img className='aboutPravasiLeftImage' src={AboutPravasiImage} alt="" />
        </div>
        <div className="aboutPravasiRight">
          <h2>About Pravasi Rajasthan</h2>
          <p>Pravasi Rajasthan is a community-driven initiative aimed at helping Rajasthani families living across India. We understand the emotional and financial burden that comes with the loss of a loved one, especially when far from home. With a small monthly subscription, we ensure that your family receives financial support in case of an untimely passing. <br/><br/>
          The initiative is further backed by the Rajasthan government, offering you peace of mind no matter where life takes you. Beyond financial security, Pravasi Rajasthan fosters a sense of belonging among Rajasthani families spread across India.</p>
          

        </div>
      </div>
    </div>


    <div className="whoWeAre">
      <div className="whoWeAreContainer">
        <div className="whoWeAreLeft">
          <h2>Who We Are</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard  dummy text ever since the 1500s, when an unknown printer took a galley  of type and scrambled it to make a type specimen book. It has survived  not only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker  including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="whoWeAreRight">
          <img src={Sceenry} alt="" />
        </div>
      </div>
    </div>
    
    <div className="meetTheTeam">
     <div className="meetTheTeamContainer">
      <h1>Meet the Team</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      <div className="teamContainer">
          <div className="teamCard">
            <img src={Profile} alt="" />
            <div className="teamCardContent">
              <h3>Sandeep</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard  dummy text ever since the 1500s, when an unknown printer took a galley  of type and scrambled it to make a type specimen book.

                It has survived  not only five centuries, but also the leap into electronic typesetting.</p>
            </div>
          </div>

          <div className="teamCard">
            <img src={Profile} alt="" />
            <div className="teamCardContent">
              <h3>Sandeep</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard  dummy text ever since the 1500s, when an unknown printer took a galley  of type and scrambled it to make a type specimen book.

                It has survived  not only five centuries, but also the leap into electronic typesetting.</p>
            </div>
          </div>

          <div className="teamCard">
            <img src={Profile} alt="" />
            <div className="teamCardContent">
              <h3>Sandeep</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard  dummy text ever since the 1500s, when an unknown printer took a galley  of type and scrambled it to make a type specimen book.

                It has survived  not only five centuries, but also the leap into electronic typesetting.</p>
            </div>
          </div>

          
      </div>
     </div>
    </div>
    <SuccessReview/>

    <Footer/>
    </>
  )
}

export default AboutUs