import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
    return (
        <Router>
            <Routes>
                {/* Define your routes here */}
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<div>About Page</div>} />
                <Route path="/contact" element={<div>Contact Page</div>} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;