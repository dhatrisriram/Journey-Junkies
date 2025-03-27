import React from 'react';
import './App.css'; // External CSS for styles
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import react-router components
import karnatakaMap from './images/edited-karnataka-map.png';
import FeedbackForm from './FeedbackForm'; // Import your FeedbackForm component
import { Link } from 'react-router-dom'; // Import Link for navigation

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Journey Junkies</h1>
      </div>
      <nav>
        <ul className="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Find a Travel Buddy</a></li>
          <li><a href="#">Travel Essentials</a></li>
          <li><a href="#">Destinations</a></li>
          <li><Link to="/feedback">Feedback</Link></li> {/* Link to Feedback page */}
          <li><a href="#">About Us</a></li>
          <li><a href="#">Login/Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
}

function MapMarker({ className, placeName, url }) {
  const handleMarkerClick = () => {
    window.location.href = url;
  };

  return (
    <div className={`location-marker ${className}`} onClick={handleMarkerClick}>
      <span className="place-name">{placeName}</span>
    </div>
  );
}

function Map() {
  return (
    <div className="map-container">
      <img src={karnatakaMap} alt="Karnataka Map" />
      <MapMarker className="mysore-marker" placeName="Mysore" url="#" />
      <MapMarker className="bijapur-marker" placeName="Bijapur" url="#" />
      <MapMarker className="hampi-marker" placeName="Hampi" url="#" />
      <MapMarker className="dandeli-marker" placeName="Dandeli" url="#" />
      <MapMarker className="chikkamagaluru-marker" placeName="Chikkamagaluru" url="#" />
    </div>
  );
}

function Main() {
  return (
    <main>
      <div className="content-container">
        <h2>Join Us for Unforgettable Adventures!</h2>
        <h1>EXPERIENCE KARNATAKA</h1>
        <h3>One State, Many Words!..</h3>
        <Map />
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 Journey Junkies | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
        <div className="newsletter">
          <input type="email" placeholder="Subscribe to our newsletter" />
          <button>Subscribe</button>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router> {/* Wrap everything in Router */}
      <div className="App">
        <Header />

        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Main />} />
          <Route path="/feedback" element={<FeedbackForm />} /> {/* Route for Feedback Form */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
