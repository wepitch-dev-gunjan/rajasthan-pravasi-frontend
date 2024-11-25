import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import PageHero from '../../components/pageHero'
import Profile from "../../assets/profile.png"
import './style.scss'


const WallOfFame = () => {
  return (
    <>
    <Header/>
    <PageHero message="WALL OF FAME"/>
    <div className="wallOfFameContainer">
        <div className="wallOfFame">
            <h2>Front End Developer</h2>
            <div className="developers">
                <div className="developersCard">
                    <img className='developersCardImage' src={Profile} alt="" />
                    <h3>Sandeep</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard  dummy text ever since the...</p>
                </div>

                <div className="developersCard">
                    <img className='developersCardImage' src={Profile} alt="" />
                    <h3>Sandeep</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard  dummy text ever since the...</p>
                </div>

                <div className="developersCard">
                    <img className='developersCardImage' src={Profile} alt="" />
                    <h3>Sandeep</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard  dummy text ever since the...</p>
                </div>

                
            </div>
        </div>
    </div>

    </>
  )
}

export default WallOfFame