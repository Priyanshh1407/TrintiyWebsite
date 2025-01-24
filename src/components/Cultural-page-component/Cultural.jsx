import React from "react";
import "./cultural.css"; // Import the separate CSS file
import Card from "./culturalcard";

const Technical = () => {
  return (
    <div className="sports">
      <div className="wrapper">
        <h1>Cultural Events</h1>
        <h5>"Where Creativity Meets Tradition!"</h5>
        <p>
          "After a remarkable journey of creativity and cultural celebration,
          we’re back with even more! Our cultural events have been a testament
          to the immense talent, passion, and diversity of our community. With
          each passing year, we’ve seen incredible performances, unforgettable
          experiences, and a legacy that continues to inspire. Join us once
          again to celebrate art, music, dance, and all that makes us unique!"
        </p>
        <div className="scols">
          <Card
            title="Mr. & Ms. Trinity"
            imageUrl="https://i.postimg.cc/8.png"
            description="Date: 27th March 2025 Venue: TBA"
          />
          <Card
            title="IDPT Band"
            imageUrl="https://i.postimg.cc/8.png"
            description="Date: 27th March 2025 Venue: TBA"
          />
          <Card
            title="Fashion Show"
            imageUrl="https://i.postimg.cc/8.png"
            description="Date: 27th March 2025 Venue: TBA"
          />
          <Card
            title="IDPT Stage Play"
            imageUrl="https://i.postimg.cc/8.png"
            description="Date: 28th March 2025 Venue: TBA"
          />
          <Card
            title="IDPT Dance"
            imageUrl="https://i.postimg.cc/8.png"
            description="Date: 28th March 2025 Venue: TBA"
          />
          <Card
            title="IPL Auction"
            imageUrl="https://i.postimg.cc/8.png"
            description="Date: 28th March 2025 Venue: TBA"
          />
          <Card
            title="Mock Stock"
            imageUrl="https://i.postimg.cc/8.png"
            description="Date: 29th March 2025 Venue: TBA"
          />
          <Card
            title="Fashion Show"
            imageUrl="https://i.postimg.cc/8.png"
            description="Date: 29th March 2025 Venue: TBA"
          />
        </div>
      </div>
    </div>
  );
};

export default Technical;
