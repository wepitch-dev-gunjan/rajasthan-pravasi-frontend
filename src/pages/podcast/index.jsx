import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import PageHero from '../../components/pageHero'
import './style.scss'
import khatushyamji from '../../assets/khatushyamji.png'

import { FaCalendarAlt } from "react-icons/fa";
import podcastProfile from "../../assets/podcast.png"
// import musicss from "../../assets/jhonk"

const Podcast = () => {
  return (
    <>
        <Header/>
    <PageHero message="Podcast"/>
    <div className="podcastPageContainer">
      <div className="podcastPage">
        <div className="filterFormContainer">
          <form className='filterForm' action="">
            <h2>Filter</h2>
          <select className='commonSelect' name="sort by" id="sortBy">
              <option value="volvo">Sort By</option>
              <option value="saab">Time</option>
              <option value="mercedes">Date</option>
          </select>

          
          <span className="searchButton">
          <input type="text" placeholder='Search' />
          <span>X</span>
          </span>
          
          
          </form>
        </div>
        <div className="allpodcastContainer">
          <div className="allpodcast">
            <div className="allpodcastCard">
              <img className="allpodcastCardImage" src={khatushyamji} alt="" />
                <span className='topicBox'>
                    <audio  controls src="../../jhonka.mp3" preload="auto">
                        Your browser does not support the audio element.
                    </audio>
                </span>
              <div className="allpodcastCardContent">
                <div className="podcastHeading">
                        <h2>Rajasthan Rhythms</h2>
                        <span>
                        By - All India Radio
                        </span>
                </div>
                <p>Explore the rich culture, heritage, and stories of Rajasthan in "Rajasthan Rhythms," a podcast that brings you closer...</p>
              <div className="podcastProfileDate">
                <div className="podcastProfile">
                    <img src={podcastProfile} alt="" />
                    <span>Saurabh Gautam</span>
                </div>
                <div className="podcastDate">
                <FaCalendarAlt color='#F96503'/>
                <span>Oct 01,2024</span>

                </div>
              </div>
              </div>
              

            </div>

            
          </div>
        </div>


      </div>
    </div>
    
    <Footer/>
    </>
  )
}

export default Podcast