// import React from 'react'
import React, { useState } from 'react';


import Header from '../../components/header'
import Footer from '../../components/footer'
import PageHero from '../../components/pageHero'
import './style.scss'
import Image1 from './../../assets/gallery.png'
const images = [
  { src: 'http://localhost:3000/static/media/backgroundImage.c9773f66e405a2ab5cd9.jpg', text: 'Image 1 Description' },
  { src: 'http://localhost:3000/static/media/backgroundImage.c9773f66e405a2ab5cd9.jpg', text: 'Image 2 Description' },
  { src: 'http://localhost:3000/static/media/backgroundImage.c9773f66e405a2ab5cd9.jpg', text: 'Image 3 Description' },
  { src: 'http://localhost:3000/static/media/backgroundImage.c9773f66e405a2ab5cd9.jpg', text: 'Image 3 Description' },
  { src: 'http://localhost:3000/static/media/backgroundImage.c9773f66e405a2ab5cd9.jpg', text: 'Image 3 Description' },
  { src: 'http://localhost:3000/static/media/backgroundImage.c9773f66e405a2ab5cd9.jpg', text: 'Image 3 Description' },
  { src: 'http://localhost:3000/static/media/backgroundImage.c9773f66e405a2ab5cd9.jpg', text: 'Image 3 Description' },
  { src: 'http://localhost:3000/static/media/backgroundImage.c9773f66e405a2ab5cd9.jpg', text: 'Image 3 Description' },
  { src: 'http://localhost:3000/static/media/backgroundImage.c9773f66e405a2ab5cd9.jpg', text: 'Image 3 Description' },
  { src: 'http://localhost:3000/static/media/backgroundImage.c9773f66e405a2ab5cd9.jpg', text: 'Image 3 Description' },
  { src: 'http://localhost:3000/static/media/backgroundImage.c9773f66e405a2ab5cd9.jpg', text: 'Image 3 Description' },
  { src: 'http://localhost:3000/static/media/backgroundImage.c9773f66e405a2ab5cd9.jpg', text: 'Image 3 Description' },
  { src: 'http://localhost:3000/static/media/backgroundImage.c9773f66e405a2ab5cd9.jpg', text: 'Image 3 Description' },
  { src: 'http://localhost:3000/static/media/backgroundImage.c9773f66e405a2ab5cd9.jpg', text: 'Image 3 Description' },
  // Add more images as needed
];

const Gallery = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open the modal and set the selected image
  const openModal = (image) => {
    setSelectedImage(image);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };



  return (
   <>
       <Header/>
    <PageHero message="Gallery"/>
    <div className="galleryPage">    
      <div className="galleryTitle">
        <div className="galleryTitleContainer">
          <h2>Gallery Folder</h2>
          <div class="search-bar">
            <input type="text" placeholder="Search"/>
            <span class="clear">&times;</span>
          </div>
        </div>
      </div>
      <div className="galleryImages">

      <div className="gallery">
      {images.map((image, index) => (
        <div className="gallery-item" key={index} onClick={() => openModal(image)}>
          <img src={image.src} alt={`Image ${index + 1}`} className="gallery-image" />
          <div className="overlay">
            <span className="text">{image.text}</span>
          </div>
        </div>
      ))}

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={selectedImage.src} alt="Selected" className="modal-image" />
            <p className="modal-text">{selectedImage.text}</p>
          </div>
        </div>
      )}
    </div>
    
      </div>

    </div>
    <Footer/>
   </>
  )
}

export default Gallery