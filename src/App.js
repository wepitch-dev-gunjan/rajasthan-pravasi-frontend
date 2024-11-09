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

function App() {
    return (
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


                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;