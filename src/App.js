import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/aboutUs';
import Contact from './pages/contact';
import Directory from './pages/directory';
import Gallery from './pages/gallery';
import Login from './pages/logIn';
import Faq from './pages/faq';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Events from './pages/events';
import Otp from './pages/otp';
import Register from './pages/register';
import Membership from './pages/membership';
import Blogs from './pages/blogs';
import ResetPassword from './pages/resetPassword';
import ChangePassword from './pages/changePassword';
import SendResetPassword from './pages/sendResetPasswordCode';
import Podcast from './pages/podcast';
import WallOfFame from './pages/wallOfFame';
import UsageOfAadhar from './pages/usageOfAadhar';
import './App.css';

function App() {
    return (
        <div className="WebsiteBody">

        
        <Router>
            <Routes>
                {/* Define your routes here */}
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<AboutUs/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/directory" element={<Directory/>} />
                <Route path="/gallery" element={<Gallery/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/faq" element={<Faq/>} />
                <Route path="/events" element={<Events/>} />
                <Route path="/otp" element={<Otp/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/membership" element={<Membership/>} />
                <Route path="/blogs" element={<Blogs/>} />
                <Route path="/resetPassword" element={<ResetPassword/>} />
                <Route path="/changePassword" element={<ChangePassword/>} />
                <Route path="/sendResetPassword" element={<SendResetPassword/>} />
                <Route path="/podcast" element={<Podcast/>} />
                <Route path="/wallOfFame" element={<WallOfFame/>} />
                <Route path="/usageOfAadhar" element={<UsageOfAadhar/>} />





                {/* Add more routes as needed */}
            </Routes>
        </Router>

        </div>
    );
}

export default App;