import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import PageHero from '../../components/pageHero'
import ImageGallery from './imageGallery'
import InfoSection from './infoSection'
import EventCardSlider from '../../components/eventCardSlider'
import BenefitPaidUser from './benefitPaidUser'
import Ngo from './ngo'
import OurPartner from './ourPartner'
import BlogSlider from './blogSlider'
import EventSlider from './eventSlider'
import FeatureBusinesses from './featureBusinesses'
import SuccessReview from './successStory'
import HeroMain from './heroMain'
import './style.scss'
import Design1 from './../../assets/vector1.png'

function Home() {

  const blogs = [
    { title: 'Blog Title 1', description: 'Short description of the blog...', link: '#' },
    { title: 'Blog Title 2', description: 'Another blog description...', link: '#' },
    { title: 'Blog Title 3', description: 'More details on this blog...', link: '#' },
];
  return (
    <>
    <Header/>
    <HeroMain/>
    <InfoSection/>
    <ImageGallery/>
    <EventSlider/>
    <EventCardSlider/>
    <Ngo/>
    <BenefitPaidUser/>
    <FeatureBusinesses/>
    <div className="combineSection">
      <img src={Design1} alt="" />

    <OurPartner/>
    <BlogSlider  />
    </div>
    
    <SuccessReview/>
    <Footer/>
    </>
  )
}

export default Home