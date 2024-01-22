import React from "react";
import "./sports.css";
import Card from "./SportsCard";

const Sports = () => {
  return (
    <>
      <div className="sports">
        <div className="wrapper">
          <h1 className="sportsHeading">TRINITY SPORTS</h1>
          <div className="scols">
          <Card
              title="Badminton"
              imageUrl="https://i.postimg.cc/CnLkPpqX/badminton.jpg"
              description="Date: 12th Feb 2024 Venue: Andheri Sports Complex"
            />
            <Card
              title="Basketball"
              imageUrl="https://i.postimg.cc/PCLznHRk/basketball.jpg"
              description="Date: TBA  Venue: TBA"
            />
            <Card
              title="Table-Tennis"
              imageUrl="https://images.unsplash.com/photo-1611251135345-18c56206b863?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="Date: 12th Feb 2024 Venue: Andheri Sports Complex"
            />
            <Card
              title="8 Ball Pool"
              imageUrl="https://images.unsplash.com/photo-1686523090965-8d570b6cf68e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="Date:  5th Feb 2024 Venue: RK Shoot Andheri"
            />
            <Card
              title="Chess"
              imageUrl="https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="Date: 12th Feb 2024 Venue: College"
            />
            <Card
              title="Cricket Over-Arm"
              imageUrl="https://i.postimg.cc/ZWP3LFKB/cricket.jpg"
              description="Date: 14th Feb 2024 Venue: Kaveerni Ground"
            />
            <Card
              title="Kabaddi"
              imageUrl="https://i.postimg.cc/4m9pYRD1/kabaddi.jpg"
              description="Date: 12th Feb 2024 Venue: Andheri Sports Complex"
            />
            <Card
              title="Handball"
              imageUrl="https://i.postimg.cc/DWLrmghj/handball.jpg"
              description="Date: 14th Feb 2024 Venue: JP Sports Arena, Malad"
            />
            <Card
              title="Football"
              imageUrl="https://images.unsplash.com/photo-1434648957308-5e6a859697e8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="Date: 14th Feb 2024 Venue: JP Sports Arena, Malad"
            />
            <Card
              title="Cricket-Under-Arm"
              imageUrl="https://i.postimg.cc/K8V10C2F/cricket-u.jpg"
              description="Date: 14th Feb 2024 Venue: JP Sports Arena, Malad"
            />
            <Card
              title="Dodgeball"
              imageUrl="https://images.unsplash.com/photo-1593786930094-d5c8164ac771?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="Date: 14th Feb 2024 Venue: JP Sports Arena, Malad"
            />
            <Card
              title="Volleyball"
              imageUrl="https://i.postimg.cc/dk9GjVLG/volleyball.jpg"
              description="Date: 14th Feb 2024 Venue: Gopinath Munde Maidaan, Vile Parle"
            />
            <Card
              title="Throwball"
              imageUrl="https://images.unsplash.com/photo-1529478562208-d4c746edcb79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNwb3J0cyUyMHRlYW18ZW58MHx8MHx8fDA%3D"
              description="Date: 14th Feb 2024 Venue: Gopinath Munde Maidaan, Vile Parle"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sports;
