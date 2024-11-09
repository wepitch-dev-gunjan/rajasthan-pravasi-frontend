
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './style.scss';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const ImageGallery = () => {
  return (
    <section className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallerySection">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={'5'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale:1,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='swiperSlider'>
          <img alt='test' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt='test' src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt='test' src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt='test' src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt='test' src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt='test' src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt='test' src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt='test' src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>


      </div>
      <button className="view-all-btn">View All</button>
    </section>
  )
}

export default ImageGallery