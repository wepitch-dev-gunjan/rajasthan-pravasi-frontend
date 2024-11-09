import React from 'react'
import './style.scss'
import Slider from "react-slick";
// Import css files
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
const EventSlider = () => {


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
    <div className="eventSliderContainer">
        <div className="eventSlider">
            <div className="eventSliderTop">
                <div className="leftContentEventSlider">
                    Featured Events
                </div>
                <div className="rightContentEventSlider">
                    <button className='whiteButton'>View All</button>
                </div>
    
            </div>
            <div className="eventSliderBottom">
                <div className="eventSliderBottomSlides">

                
            <Slider {...settings}>
                
                {eventSlide.map((t)=>(
                    <>
                    <div className="eventSliderBoxContainer">
                        <div className="eventSliderBox">
                            <div className="eventSliderBoxTop">
                                <img src={Camel} alt="" />
                            </div>
                            <div className="eventSliderBoxBottom">
                            <div className="eventSliderBoxBottomLeft">
                                <h4>15-18</h4>
                                <h5>Feburary</h5>
                                <p>10AM-12AM</p>
                            </div>
                            <div className="eventSliderBoxBottomRight">
                                <h4>Nagaur Fair in February, Nagaur</h4>
                                <p>The Nagaur Fair is the second biggest fair in India. Held every year between the months of January and February, it is popularly  known as the Cattle Fair of Nagaur as this is where owners gather to  trade animals</p>
                                <span> <CiLocationOn color='#F96503'/> Nagaur city, near the historic Nagaur Fort</span>
                            </div>

                            </div>
                        </div>
                    </div>
                    </>
                    
                ))}
            </Slider>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}


const eventSlide = [
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

export default EventSlider