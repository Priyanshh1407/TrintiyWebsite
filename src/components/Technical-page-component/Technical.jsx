import React from "react";
import "./technical.css"; // Import the separate CSS file
import Card from "./TechnicalCard";

const Technical = () => {
  return (
    <div className="sports">
      <div className="wrapper">
        <h1>Technical Events</h1>
        <h5>"Pioneering Tomorrow with Innovation!"</h5>
        <p>"We are back, pushing the boundaries of innovation! Over the years, our technical events have ignited curiosity, inspired new ideas, and shaped the minds of future tech leaders. From groundbreaking projects to industry-relevant challenges, we’ve seen incredible achievements that have made an impact. This year, we are more excited than ever to bring together brilliant minds to explore, create, and transform the future of technology."</p>
        <div className="scols">
          {/* Add your event data below */}
          <Card
            title="Trinity for Schools 1"
            imageUrl="https://i.postimg.cc/CnLkPpqX/badminton.jpg"
            description="Date: 3rd Feb 2025 Venue: CNMS, Mumbai"
            extra=""
          />
          <Card
            title="Trinity for Schools 2"
            imageUrl="https://i.postimg.cc/CnLkPpqX/badminton.jpg"
            description="Date: 5th Feb 2025 Venue: DPS, Panvel"
            extra=""
          />
          <Card
            title="Tech Treasure Hunt"
            imageUrl="https://i.postimg.cc/PCLznHRk/basketball.jpg"
            description="Date: TBA Venue: DJS College"
            extra=""
          />
          <Card
            title="Drone Race"
            imageUrl="https://i.postimg.cc/PCLznHRk/basketball.jpg"
            description="Date: 22rd March 2025 Venue: DJS College"
            extra=""
          />
                    <Card
            title="Shark Tank"
            imageUrl="https://i.postimg.cc/PCLznHRk/basketball.jpg"
            description="Date: 23rd March 2025 Venue: Conference Room"
            extra=""
          />
                    <Card
            title="Tech Expo"
            imageUrl="https://i.postimg.cc/PCLznHRk/basketball.jpg"
            description="Date: 12th April 2025 Venue: BJ Hall"
            extra=""
          />
          {/* Repeat this for all other events */}
        </div>
      </div>
    </div>
  );
};

export default Technical;
