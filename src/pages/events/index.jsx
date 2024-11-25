import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import PageHero from '../../components/pageHero'
import './style.scss'
import khatushyamji from '../../assets/khatushyamji.png'
import { FaLocationDot } from "react-icons/fa6";

const Events = () => {
  return (
    <>
        <Header/>
    <PageHero message="Events"/>
    <div className="eventPageContainer">
      <div className="eventPage">
        <h2>Filter</h2>
        <div className="filterFormContainer">
          <form className='filterForm' action="">
          <select className='commonSelect' name="sort by" id="sortBy">
              <option value="volvo">Increasing Order</option>
              <option value="saab">Time</option>
              <option value="mercedes">Date</option>
          </select>

          <select className='commonSelect' name="Categories" id="categories">
              <option value="volvo">Categories</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
          </select>


          <select className='commonSelect' name="Location" id="Location">
              <option value="volvo">Location</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
          </select>

          <select className='commonSelect' name="Price" id="price">
              <option value="volvo">Price</option>
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
        <div className="allEventContainer">
          <div className="allEvent">
            <div className="allEventCard">
              <img className="allEventCardImage" src={khatushyamji} alt="" />
              <div className="allEventCardContent">
                <div className="allEventCardLeft">
                  <h2>9-17</h2>
                  <span>November</span>
                  <p>10AM-12PM</p>
                </div>
                <div className="allEventCardRight">
                  <h2>Gangaur Festival</h2>
                  <p>The Gangaur festival is  celebrated in Jaipur, Rajasthan during the</p>
                  <div className="cardLocationPrice">
                    <span>499 onwards</span>
                    <span><FaLocationDot color='#F96503'/>Jaipur</span>
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

export default Events