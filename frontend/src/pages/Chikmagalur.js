import React from "react";
import './Places.css'; 
import SringeriImage from './images/Sringeri Sharadha Peetham.jpg';
import KalaseshwaraImage from './images/Kalaseshwara Temple.jpg';
import HebbeFallsImage from './images/Hebbe falls.jpg';

const Places = () => {
  return (
    <div className="places-page">
      <header
        className="header"
        style={{
          background: "url('https://ik.imagekit.io/xoxqszf3k/wp-content/uploads/2018/10/devaramane.jpg') no-repeat center center",
          backgroundSize: "cover", // Ensures the image covers the entire header
        }}
      >
        <h1>Chikmagalur</h1>
        <div className="header-content"
        >
          <p style={{ fontSize: "0.99rem"}}>
            A hill station at the foothills of the Mullayanagiri peak in the Western Ghats in Karnataka,
            Chikmagalur entices with trekking trails, coffee plantations, rivers, waterfalls, temples, and wildlife.
          </p>
        </div>
      </header>

      {/* Places to visit Section */}
      <section className="things-to-do">
        <h2>Places to Visit</h2>
        <div className="places">
          <PlaceCard
            imgSrc={SringeriImage}
            altText="Sringeri Sharada Peetham"
            title="Sringeri Sharada Peetham"
            description="An important Advaita matha, Sringeri Sharada Peetham located on the banks of the Tunga River was established by the revered 8th-century sage, Adi Shankaracharya."
            subheading="Hindu Pilgrimage Site"
            time="Suggested Time: 1 to 2 hours"
          />
          <PlaceCard
            imgSrc={KalaseshwaraImage}
            altText="Shri Kalaseshwara Swami Temple"
            title="Shri Kalaseshwara Swami Temple"
            description="Located in Kalasa town on the banks of Bhadra River, this temple is a sacred Hindu temple dedicated to Shiva. It also houses idols of other deities."
            subheading="Sacred Shiva Temple"
            time="Suggested Time: 1 hour"
          />
          <PlaceCard
            imgSrc={HebbeFallsImage}
            altText="Hebbe Falls"
            title="Hebbe Falls"
            description="Located in a private coffee estate, Hebbe Falls gushes from a height of 168 meters and comprises two sections - Dodda Hebbe and Chikka Hebbe."
            subheading="Picturesque Two-Tiered Waterfall"
            time="Suggested Time: 1 to 2 hours"
          />
        </div>
      </section>

      {/* Best Time to Visit Section */}
      <section className="best-time-to-visit">
        <h2>Best Time to Visit Chikmagalur</h2>
        <div className="seasons">
          <Season
            period="Oct-Mar"
            type="Peak Season"
            details={[
              "What To Expect: Cosy weather during the day and colder nights.",
              "Things You'll Love: Sightseeing and visiting the coffee plantations.",
            ]}
          />
          <Season period="Jun-Sep" type="Moderate Season" />
          <Season period="Apr-May" type="Off-season" />
        </div>
        <div className="festivals">
          <h3>Festivals and Events</h3>
          <p>Kailash Fair</p>
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
    <div className="season" >
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
