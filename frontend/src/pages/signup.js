import React, { useState } from 'react';
import './login.css'; 
import waterfall from './images/jog falls.jpg';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signing up with', username, email, password);
  };

  return (
    <div className="container">
      {/* Image Section */}
      <div className="image-section">
        <div className="images-grid">
          <img
            src="https://www.skymetweather.com/content/wp-content/uploads/2022/05/Avoid-These-Mistakes-When-Travelling-this-Summer-fb.jpg"
            alt="Time to travel"
          />
          <img
            src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202406/66691948cf6a2-travelling-12430430-16x9.jpg?size=948:533"
            alt="Hiker on Mountain"
          />
          <img
            src="https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/destination/m_destination-goa-landscape_l_400_640.jpg"
            alt="Beach"
          />
          <img
            src="https://blog.novatr.com/hs-fs/hubfs/Khajuraho%20Temples%20in%20Madhya%20Pradesh-1.jpg?width=1000&height=600&name=Khajuraho%20Temples%20in%20Madhya%20Pradesh-1.jpg"
            alt="Ancient Temple"
          />
          <img src={waterfall} alt="Waterfall" />
          <img
            src="https://img.freepik.com/premium-photo/alpine-adventure-bliss-camping-adventure-photo_960396-216812.jpg"
            alt="Trekking van"
          />
        </div>
        <h1>
          Journey <br /> &nbsp;&nbsp;&nbsp;&nbsp;Junkies
        </h1>
      </div>

      {/* Form Section */}
      <div className="form-section">
        <h2>Ready to go on a Journey?</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
