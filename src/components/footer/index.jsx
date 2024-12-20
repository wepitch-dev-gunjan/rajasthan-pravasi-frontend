import React from 'react'
import './style.scss'
import Android from './../../assets/google-play-badge.webp'
import Apple from './../../assets/apple-app-store-logo.jpg'
import Qrcode from './../../assets/qrcodem.png'
import '@fontsource/jost'; // Defaults to weight 400
import Like from './../../assets/Like.png'


const Footer = () => {
  return (
        <>
        <div className="subscribeFooterContainer">
            <div className="subscribeFooter">
                <span className='likeContainer'>
                    <img className='likeImage' src={Like} alt="" />
                    </span>
                <div className="subscribeFooterLeft">
                Connect with Us
                </div>
                <div className="subscribeFooterRight">
                    
                        <form className="subscribeFooterRightForm" action="">
                        <input className='subscribeInput' type="text" />
                        <button className='subscribeButton'> Subscribe</button>
                        </form>
                    
                </div>

                
            </div>
        </div>
        <div className="footer-container">
        <div className="footer-box1">
            <h6>Connect With Pravasi</h6>
        </div>
        <div className="footer-box2">
        <h6>Activities</h6>
        <ul>
            <li>Blogs</li>
            <li>Blogs</li>
            <li>Blogs</li>
            <li>Blogs</li>
        </ul>
        </div>
        <div className="footer-box3">
        <h6>Help & Support</h6>
        <ul>
            <li>Blogs</li>
            <li>Blogs</li>
            <li>Blogs</li>
            <li>Blogs</li>
        </ul>
        </div>
        <div className="footer-box4">
            <div className="qrcode-footer">
                <img className='qrcodeScanner' src={Qrcode} alt="" />
                <p>Download Pravasi App</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                <div className="appstore">
                    <a><img src={Apple} alt="" /></a>
                    <a><img src={Android} alt="" /></a>

                </div>
            </div>
        </div>

        </div>
        </>
)
}

export default Footer