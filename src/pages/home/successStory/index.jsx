import React from 'react'
import './style.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HawaMahal from './../../../assets/Group.png'
import Camel from './../../../assets/camel.png'
import rightArrow from './../../../assets/weui_arrow-outlined.png'
import leftArrow from './../../../assets/weui_arrow-outlinedLeft.png'
import { CiLocationOn } from "react-icons/ci";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",color:"transparent" }}
        onClick={onClick}
        >
              <img src={rightArrow} alt="Next" style={{ width: '30px', height: 'auto' }} />
              </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" ,color:"transparent"}}
        onClick={onClick}
      >
        <img src={leftArrow} alt="Next" style={{ width: '30px', height: 'auto' }} />
        </div>
    );
  }


const SuccessReview = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <>
    <div className="SuccessReviewContainer">
        <div className="SuccessReview">
            <h2>Our Success Stories</h2>
            <p>These headlines are designed to emphasize the positive outcomes and trust that Pravasi Rajasthan provides.</p>
            <div className="SuccessReviewSliderContainer">
                <div className="SuccessReviewSlider">
                    <Slider {...settings}>
                    
                        {Reviews.map((t)=>(
                            <>
                            <div className="SuccessReviewCardContainer">
                                <span className='SuccessReviewCardProfile'>
                                    <img src={Camel} alt="" />
                                </span>
                                <div className="SuccessReviewCardTop">
                                <h2>Lakshmi Mittal</h2>
                                <span><CiLocationOn color='#F96503'/>22, Dr. APJ Abdul Kalam Road</span>

                                </div>
                                <p>Pravasi Rajasthan gave me peace of mind during the hardest time of my life. After my father's sudden passing, the financial support we received helped us cover unexpected expenses and allowed my family to focus on healing.</p>
                            </div>
                            </>
                            
                        ))}
                    </Slider>
                </div>

            </div>
            <div className="buttonView">
                <button className='orangeButton'>View All</button>
            </div>
        </div>
    </div>
    </>
  )
}


const Reviews = [
    {
        image: {HawaMahal}, // Replace with actual image path
        title: 'Rajasthan High Court imposes cost...',
        description: 'Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry standard dummy text ever',
        name: 'Sourabh Gautam',
        date:'12 Oct 2024',
    },
    {
        image: {HawaMahal}, // Replace with actual image path
        title: 'Rajasthan High Court imposes cost...',
        description: 'Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry standard dummy text ever',
        name: 'Sourabh Gautam',
        date:'12 Oct 2024',
    },
    {
        image: {HawaMahal}, // Replace with actual image path
        title: 'Rajasthan High Court imposes cost...',
        description: 'Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry standard dummy text ever',
        name: 'Sourabh Gautam',
        date:'12 Oct 2024',
    },
    {
        image: {HawaMahal}, // Replace with actual image path
        title: 'Rajasthan High Court imposes cost...',
        description: 'Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry standard dummy text ever',
        name: 'Sourabh Gautam',
        date:'12 Oct 2024',
    },
    {
        image: {HawaMahal}, // Replace with actual image path
        title: 'Rajasthan High Court imposes cost...',
        description: 'Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry standard dummy text ever',
        name: 'Sourabh Gautam',
        date:'12 Oct 2024',
    },
    {
        image: {HawaMahal}, // Replace with actual image path
        title: 'Rajasthan High Court imposes cost...',
        description: 'Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry standard dummy text ever',
        name: 'Sourabh Gautam',
        date:'12 Oct 2024',
    },
   
   
];


export default SuccessReview