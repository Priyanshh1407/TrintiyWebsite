import React from "react";
import "../../CSS/sportsPage.css";  // Import the separate CSS file
import Card from "./SportsCard";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Sports() {
  const eventData = [
    { id: 1, name: "Badminton", venue: "Andheri Sports Complex", date: "2th Feb 2024", image: "https://i.postimg.cc/CnLkPpqX/badminton.jpg" },
    { id: 2, name: "Basketball", venue: "TBA", date: "TBA", image: "https://i.postimg.cc/PCLznHRk/basketball.jpg" },
    { id: 3, name: "Table-Tennis", venue: "Andheri Sports Complex", date: "12th Feb 2024", image: "https://i.postimg.cc/WF1JyWB6/tabletennis.jpg" },
    { id: 1, name: "8 Ball Pool", venue: "RK Shoot Andheri", date: "5th Feb 2024", image: "https://i.postimg.cc/zLjg0ZcG/8ballpool.jpg" },
    { id: 1, name: "Chess", venue: "College", date: "12th Feb 2024", image: "https://i.postimg.cc/H8J8YJsr/chess.jpg" },
    { id: 1, name: "Cricket Over-Arm", venue: "Kaveerni Ground", date: "14th Feb 2024", image: "https://i.postimg.cc/ZWP3LFKB/cricket.jpg" },
    { id: 1, name: "Kabaddi", venue: "Andheri Sports Complex", date: "12th Feb 2024", image: "https://i.postimg.cc/4m9pYRD1/kabaddi.jpg" },
    { id: 1, name: "Handball", venue: "JP Sports Arena, Malad", date: "14th Feb 2024", image: "https://i.postimg.cc/DWLrmghj/handball.jpg" },
    { id: 1, name: "Football", venue: "JP Sports Arena, Malad", date: "14th Feb 2024", image: "https://i.postimg.cc/MXXQbLbz/football.jpg" },
    { id: 1, name: "Cricket-Under-Arm", venue: "JP Sports Arena, Malad", date: "14th Feb 2024", image: "https://i.postimg.cc/K8V10C2F/cricket-u.jpg" },
    { id: 1, name: "Dodgeball", venue: "JP Sports Arena, Malad", date: "14th Feb 2024", image: "https://i.postimg.cc/R6pnx19r/dodgeball.jpg" },
    { id: 1, name: "Volleyball", venue: "Gopinath Munde Maidaan", date: "14th Feb 2024", image: "https://i.postimg.cc/CnLkPpqX/badminton.jpg" },
    { id: 1, name: "Throwball", venue: "Gopinath Munde Maidaan", date: "14th Feb 2024", image: "https://i.postimg.cc/zL5hCXpQ/throwball.jpg" },
  ];

  return (
    <div className="sports-page bg-gradient-to-r from-black to-red-800 text-white min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-16 bg-cover bg-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-yellow-300 font-bold">
          Sports Events
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4">
          We are back with our competition and lots of memories!
        </p>
      </div>

      {/* Cards Section */}
      <div id="cultural" className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventData.map((event) => {
            return (
              <div key={event.id} className="bg-white bg-opacity-10 border border-yellow-300 rounded-lg shadow-lg p-4">
                <img
                  src={event.image}
                  alt="Event"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2">
                  {event.name}
                </h3>
                <ul className="text-xs sm:text-sm md:text-base">
                  <li>
                    <LocationOnIcon /> <strong>Venue:</strong> {event.venue}
                  </li>
                  <li>
                    <CalendarTodayIcon /> <strong>Date:</strong> {event.date}
                  </li>
                  <li>
                    <AccessTimeIcon /> <strong>Time:</strong> {event.time}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sports;

{/*
   <>
      <div className="sports">
        <div className="wrapper">
          <h1 className="sportsHeading">TRINITY SPORTS</h1>
          <h5>Want to register? Scroll down and register yourself</h5>
          <div className="scols">
          <Card
              title="Badminton"
              imageUrl="https://i.postimg.cc/CnLkPpqX/badminton.jpg"
              description="Date: 12th Feb 2024 Venue: Andheri Sports Complex"
              extra=""
            />
            <Card
              title="Basketball"
              imageUrl="https://i.postimg.cc/PCLznHRk/basketball.jpg"
              description="Date: TBA  Venue: TBA"
              extra=""
            />
            <Card
              title="Table-Tennis"
              imageUrl="https://i.postimg.cc/WF1JyWB6/tabletennis.jpg"
              description="Date: 12th Feb 2024 Venue: Andheri Sports Complex"
              extra=""
            />
            <Card
              title="8 Ball Pool"
              imageUrl="https://i.postimg.cc/zLjg0ZcG/8ballpool.jpg"
              description="Date:  5th Feb 2024 Venue: RK Shoot Andheri"
              extra=""
            />
            <Card
              title="Chess"
              imageUrl="https://i.postimg.cc/H8J8YJsr/chess.jpg"
              description="Date: 12th Feb 2024 Venue: College"
              extra=""
            />
            <Card
              title="Cricket Over-Arm"
              imageUrl="https://i.postimg.cc/ZWP3LFKB/cricket.jpg"
              description="Date: 14th Feb 2024 Venue: Kaveerni Ground"
              extra=""
            />
            <Card
              title="Kabaddi"
              imageUrl="https://i.postimg.cc/4m9pYRD1/kabaddi.jpg"
              description="Date: 12th Feb 2024 Venue: Andheri Sports Complex"
              extra=""
            />
            <Card
              title="Handball"
              imageUrl="https://i.postimg.cc/DWLrmghj/handball.jpg"
              description="Date: 14th Feb 2024 Venue: JP Sports Arena, Malad"
              extra=""
            />
            <Card
              title="Football"
              imageUrl="https://i.postimg.cc/MXXQbLbz/football.jpg"
              description="Date: 14th Feb 2024 Venue: JP Sports Arena, Malad"
              extra=""
            />
            <Card
              title="Cricket-Under-Arm"
              imageUrl="https://i.postimg.cc/K8V10C2F/cricket-u.jpg"
              description="Date: 14th Feb 2024 Venue: JP Sports Arena, Malad"
              extra=""
            />
            <Card
              title="Dodgeball"
              imageUrl="https://i.postimg.cc/R6pnx19r/dodgeball.jpg"
              description="Date: 14th Feb 2024 Venue: JP Sports Arena, Malad"
              extra="FOR GIRLS"
            />
            <Card
              title="Volleyball"
              imageUrl="https://i.postimg.cc/dk9GjVLG/volleyball.jpg"
              description="Date: 14th Feb 2024 Venue: Gopinath Munde Maidaan, Vile Parle"
              extra=""
            />
            <Card
              title="Throwball"
              imageUrl="https://i.postimg.cc/zL5hCXpQ/throwball.jpg"
              description="Date: 14th Feb 2024 Venue: Gopinath Munde Maidaan, Vile Parle"
              extra="FOR GIRLS"
            />
          </div>
        </div>
        <div className="register">
        <button className="custom-btn btn-3"><a href="https://docs.google.com/forms/d/e/1FAIpQLScXaRpDUHhHbSO9hdnMFoPy2DEIyT4cH6dNWqAP26H88YsPNQ/viewform?usp=sf_link">REGISTER</a></button>
        </div>
      </div>
    </>*/}