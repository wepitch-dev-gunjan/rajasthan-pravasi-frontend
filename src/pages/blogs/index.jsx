import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import PageHero from '../../components/pageHero'
import './style.scss'
import khatushyamji from '../../assets/khatushyamji.png'
import { FaLocationDot } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";



const Blogs = () => {
  return (
    <>
        <Header/>
    <PageHero message="Blogs"/>
    <div className="blogPageContainer">
      <div className="blogPage">
        <h2>Filter</h2>
        <div className="filterFormContainer">
          <form className='filterForm' action="">
          <select className='commonSelect' name="sort by" id="sortBy">
              <option value="volvo">Sort By</option>
              <option value="saab">Time</option>
              <option value="mercedes">Date</option>
          </select>

          <select className='commonSelect' name="Categories" id="categories">
              <option value="volvo">Categories</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
          </select>


          
          <span className="searchButton">
          <input type="text" placeholder='Search' />
          <span>X</span>
          </span>
          <button className='resetFilter'>Reset Filter</button>
          
          </form>
        </div>
        <div className="allblogContainer">
          <div className="allblog">
            <div className="allblogCard">
                <span className='topicBox'>Crime</span>
              <img className="allblogCardImage" src={khatushyamji} alt="" />
              <div className="allblogCardContent">
                <div className="blogHeading">
                        <h2>Rajasthan High Court imposes...</h2>
                        <span>
                            <IoTimeOutline color='#F96503' />
                            5 min. read
                        </span>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry...</p>
              <div className="blogProfileDate">
                <div className="blogProfile">
                    <img src={khatushyamji} alt="" />
                    <span>Saurabh Gautam</span>
                </div>
                <div className="blogDate">
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

export default Blogs