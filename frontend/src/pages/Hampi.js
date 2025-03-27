import React from "react";
import './Places.css'; 
import VirupakshaImage from './images/Virupaksha.jpg';
import VittalaImage from './images/Vittala.jpg';
import CorracleImage from './images/Corracle.jpg';


const Places = () => {
  return (
    <div className="places-page">
      <header
        className="header"
        style={{
          background: "url('https://media.istockphoto.com/id/136232473/photo/achyuta-raya-temple-hampi-karnataka-india.jpg?s=612x612&w=0&k=20&c=iyApv09FCVZU1KitHzw0WyAsEoGEt4xE4ZsEjEQG8tQ=') no-repeat center center",
          backgroundSize: "cover", 
          width: "100%"// Ensures the image covers the entire header
        }}
      >
  <h1>Hampi</h1>
  <div class="header-content">
    <p style={{ fontSize: "0.99rem"}}>
    The renowned UNESCO World Heritage Site and the once-magnificent capital of the Vijayanagara Empire.
     Hampi attracts backpackers and pilgrims in equal numbers due to its intriguing ruins of forts and temples.
    </p>
  </div>
</header>


      {/* Places to visit Section */}
      <section className="things-to-do">
        <h2>Places to Visit</h2>
        <div className="places">
          <PlaceCard
            imgSrc={VirupakshaImage}
            altText="Virupaksha Temple"
            title="Virupaksha Temple"
            description="Popular for being an active temple since the 7th century, Virupaksha Temple is located on the southern side of river Tungabhadra, and is an important pilgrimage centre for Shiva devotees."
            time="Suggested Time: 2 to 3 hours"
          />
          <PlaceCard
            imgSrc={VittalaImage}
            altText="Vittala Temple"
            title="Vittala Temple"
            description="Dedicated to Lord Vishnu and home to the fascinating musical pillars and the incomparable stone chariot, the Vittala Temple complex is a major attraction in the city."
            time="Suggested Time: Minimum 1 hour"
          />
          <PlaceCard
            imgSrc={CorracleImage}
            altText="Corracle ride"
            title="Corracle ride"
            description="The round cane boats called coracles, have been an important source of transportation in the city since the 15th century. It is a must-do activity in Hampi!"
            time="Suggested Time: 1 to 1.5 hours"
          />
        </div>
      </section>

      {/* Best Time to Visit Section */}
      <section className="best-time-to-visit">
        <h2>Best Time to Visit Hampi</h2>
        <div className="seasons">
          <Season
            period="Oct-Mar"
            type="Peak Season"
            details={[
              "What To Expect: Moderately cool weather.",
              "Things You'll Love: Sightseeing, rock climbing and ferry rides",
            ]}
          />
          <Season period="Apr-Jun" type="Moderate Season" />
          <Season period="Jul-Sep" type="Off-season" />
        </div>
        <div className="festivals">
          <h3>Festivals and Events</h3>
          <p>Hampi Festival- November</p>
        </div>
      </section>
    </div>
  );
};

// Reusable Components
function PlaceCard({ imgSrc, altText, title, description, subheading, time }) {
  return (
    <div className="place-card">
      <img src={imgSrc} alt={altText} />
      <div className="place-card-info">
        <h3>{title}</h3>
        <p className="subheading">{subheading}</p>
        <p>{description}</p>
        <p className="time">{time}</p>
      </div>
    </div>
  );
}

function Season({ period, type, details = [] }) {
  return (
    <div className="season">
      <h3>{period}</h3>
      <p>{type}</p>
      {details.length > 0 && (
        <ul>
          {details.map((detail, index) => (
            <li key={index}  style={{fontSize:"1.2rem"}}>{detail}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Places;
