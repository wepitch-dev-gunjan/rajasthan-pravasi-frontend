import React from 'react'
import HawaMahal from '../../../assets/hawamahal.jpg'
import './style.scss'
import Slider from "react-slick";
import { FaCalendarAlt } from "react-icons/fa";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rightArrow from './../../../assets/weui_arrow-outlined.png'
import leftArrow from './../../../assets/weui_arrow-outlinedLeft.png'


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
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
        style={{ ...style, display: "block"}}
        onClick={onClick}
      >
        <img src={leftArrow} alt="Next" style={{ width: '30px', height: 'auto' }} />
        </div>
    );
  }


const BlogSlider = () => {
    

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
    <div className="blogContainer">
        <div className="blogSection">
            <div className="blogSlider">
            <Slider {...settings}>
                
                {testimonials.map((t)=>(
                    <>
                    <div className="blogSlickContainer">
                    <div className="blogBoxContainer">
                        <img src={HawaMahal} alt="" />
                        <span className='typeOfBlog'>
                            Crime
                        </span>
                        <div className="blogBoxContent">
                            <h2>{t.title}</h2>
                            <p>{t.description}</p>
                            <div className="blogDetail">
                                <div className="blogDetailLeft">
                                <img src={HawaMahal} height={'10%'} alt="" />
                                <h6>{t.name}</h6>
                                </div>
                                <div className="blogDetailRight">
                                <p> <FaCalendarAlt color="orange" />
                                {t.date}</p>
                                </div>  
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
    </>
  )
}

const testimonials = [
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



export default BlogSlider