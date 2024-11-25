import {React, useState} from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import PageHero from '../../components/pageHero'
import './style.scss'
import khatushyamji from '../../assets/khatushyamji.png'
import { FaLocationDot } from "react-icons/fa6";

import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';



const Directory = () => {

  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
  };
  return (
    <>
        <Header/>
    <PageHero message="Directory"/>
    <div className="directoryPageContainer">
      <div className="directoryPage">
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
          <select className='commonSelect' name="Categories" id="categories">
              <option value="volvo">Reviews</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
          </select>

          <select className='commonSelect' name="Categories" id="categories">
              <option value="volvo">Location  </option>
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
        <div className="alldirectoryContainer">
        <h2>Businesses Directory</h2>
          <div className="alldirectory">
            <div className="alldirectoryCard">
              <img className="alldirectoryCardImage" src={khatushyamji} alt="" />
              <div className="alldirectoryCardContent">
                <div className="directoryHeading">
                        <h2>SHRI RIDDHI SIDDHI PROPERTIES</h2>
                        <span>
                          <IconButton
                            onClick={handleLike}
                            color={liked ? "error" : "default"} // Change color when liked
                            aria-label="like"
                          >
                            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                          </IconButton>
                        </span>
                </div>
                <div className="directoryReviewContainer">
                <Stack spacing={1}>
                  <Rating 
                  sx={{
                    "& .MuiRating-iconFilled": {
                      color: "#F96503", // Change color of filled stars
                    },
                    "& .MuiRating-iconHover": {
                      color: "#F96503", // Change color on hover
                    },
                  }}
                  name="half-rating" defaultValue={4.5} precision={0.5} />
                </Stack>
                <p>89 Reviews</p>
                </div>
                <p>Real Estate Agents</p>
              <div className="directoryLocation">
                    <FaLocationDot color='#F96503' />
                    <span>213, Derrick Street, Jaipur</span>
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

export default Directory