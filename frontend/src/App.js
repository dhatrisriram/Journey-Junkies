import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Chikmagalur from './pages/Chikmagalur';
import Hampi from './pages/Hampi';
import TouristGuide from './pages/TouristGuide';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Chikmagalur" element={<Chikmagalur />} />
        <Route path="/Hampi" element={<Hampi />} />
        <Route path="/TouristGuide" element={<TouristGuide />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
