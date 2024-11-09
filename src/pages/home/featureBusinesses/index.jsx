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


const FeatureBusinesses = () => {

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
    <div className="featureBusinessContainer">
        <div className="featureBusiness">
            <h2>Feature Businesses</h2>
            <div className="featureBusinessSliderContainer">
                <div className="featureBusinessSlider">
                    <Slider {...settings}>
                    
                        {featureBusiness.map((t)=>(
                            <>
                            <div className="featureBusinessCardContainer">
                                <div className="featureBusinessCard">
                                    <div className="featureBusinessCardTop">
                                        <img src={Camel} alt="" />
                                    </div>
                                <div className="featureBusiessCardBottom">
                                    <div className="featureBusiessCardBottomLeft">

                                    </div>
                                    <div className="featureBusiessCardBottomRgiht">
                                        <h2>SHRI RIDDHI SIDDHI PROPERTIES</h2>
                                        <p>Real Estate Agents</p>
                                        <span><CiLocationOn/> 213, Derrick Street, Jaipur</span>
                                    </div>

                                </div>
                                </div>
                            </div>
                            </>
                            
                        ))}
                    </Slider>
                </div>

            </div>
            <div className="buttonView">
                <button>View All</button>
            </div>
        </div>
    </div>
    </>
  )
}


const featureBusiness = [
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


export default FeatureBusinesses