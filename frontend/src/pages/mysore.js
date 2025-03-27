import React from "react";
import './Places.css'; 
import PalaceImage from './images/Mp.jpg';
import ZooImage from './images/Mz.jpg';
import HillsImage from './images/Ch.jpg';


const Places = () => {
  return (
    <div className="places-page">
      <header class="header">
  <h1>Mysore</h1>
  <div class="header-content">
    <p>
    The ‘City of Palaces’, Mysore revels in its vibrant history, and rich arts and culture. It allures tourists with its grand palaces, majestic temples, and landscaped gardens.
    </p>
  </div>
</header>


      {/* Places to visit Section */}
      <section className="things-to-do">
        <h2>Places to Visit</h2>
        <div className="places">
          <PlaceCard
            imgSrc={PalaceImageImage}
            altText="Mysore Palace"
            title="Mysore Palace"
            description="The official residence of the erstwhile royal family of Mysore, Mysore Palace is an architectural masterpiece showcasing a blend of Hindu, Muslim, Rajput and Gothic styles."
            subheading="Hiatorical Royal Palace"
            time="Suggested Time: 3 to 4 hours"
          />
          <PlaceCard
            imgSrc={ZooImageImage}
            altText="Mysore Zoo"
            title="Mysore Zoo"
            description="Dating back to 1892, Mysore zoo is one of the oldest zoos in the world that was established by the Maharaja of Mysore. The zoo houses animals from over 25 countries."
            subheading="Erstwhile Royal Zoo"
            time="Suggested Time: 3 to 4 hours"
          />
          <PlaceCard
            imgSrc={HillsImageImage}
            altText="Chamundi Hills "
            title="Chamundi Hills"
            description="Visitors are attracted to Chamundi Hills for the Chamundeshwari Temple and Nandi statue at the top of the hill, along with its traditional temple art and architecture."
            subheading="Iconic Nandi Statue"
            time="Suggested Time: 1 to 2 hours"
          />
        </div>
      </section>

      {/* Best Time to Visit Section */}
      <section className="best-time-to-visit">
        <h2>Best Time to Visit Mysore</h2>
        <div className="seasons">
          <Season
            period="Oct-Feb"
            type="Peak Season"
            details={[
              "What To Expect: Pleasant weather with temperatures falling as low as 15C.",
              "Things You'll Love: Visiting the temples, palaces and forts",
            ]}
          />
          <Season period="Mar-Jun" type="Moderate Season" />
          <Season period="Jul-Sep" type="Off-season" />
        </div>
        <div className="festivals">
          <h3>Festivals and Events</h3>
          <p>Kailash Fair - TBD</p>
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
            <li key={index}>{detail}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Places;