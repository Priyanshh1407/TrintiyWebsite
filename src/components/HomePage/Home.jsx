import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrincipalSir from "../../images/principal_sir.jpg";

import img1 from "../../images/HomePage/img1.jpg";
import img2 from "../../images/HomePage/img2.jpg";
import img3 from "../../images/HomePage/img3.jpg";
import img4 from "../../images/HomePage/img4.jpg";
import img5 from "../../images/HomePage/img5.jpg";
import img6 from "../../images/HomePage/img6.dng";
import img7 from "../../images/HomePage/img7.jpg";
import img8 from "../../images/HomePage/img8.jpg";
import img9 from "../../images/HomePage/img9.jpg";
import video1 from "../../images/HomePage/video1.mov";

const HomePage = () => {
  const mediaItems = [
    { type: "video", src: video1 },
    { type: "image", src: img1 },
    { type: "image", src: img2 },
    { type: "image", src: img3 },
    { type: "image", src: img4 },
    { type: "image", src: img5 },
    { type: "image", src: img6 },
    { type: "image", src: img7 },
    { type: "image", src: img8 },
    { type: "image", src: img9 },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Hide navigation buttons
    swipe: true,   // Enable swipe gesture
    touchMove: true, // Enable touch drag for touch devices
    responsive: [
      {
        breakpoint: 768, // Adjust for tablet and mobile
        settings: {
          dots: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <div className="relative bg-black text-white min-h-screen">
      {/* Media Carousel */}
      <div className="container carousel-section py-6 px-4 sm:px-10">
        <Slider {...carouselSettings}>
          {mediaItems.map((item, index) => (
            <div key={index} className="w-full h-full object-contain rounded-xl shadow-md">
              {item.type === "video" ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover rounded-xl shadow-md"
                />
              ) : (
                <img
                  src={item.src}
                  alt={`Media ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl shadow-md"
                />
              )}
            </div>
          ))}
        </Slider>
      </div>

      {/* Main Content */}
      <div id="heading" className="container section py-8 text-center bg-black">
        <p className="text-base sm:text-lg">is back to ignite your passion and creativity</p>
        <p className="text-xl sm:text-2xl mt-4">27th-29th MARCH 2025</p>
      </div>

      {/* About Us Section */}
      <div id="about" className="container section bg-black text-white py-10 px-4 sm:px-10">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="w-full md:w-3/5 text-left">
            <h2 className="text-4xl md:text-5xl text-text_Colors-yellow mb-4 font-abril text-center md:text-left">About Us</h2>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-center md:text-left mt-2">
              Trinity embodies the spirit of D.J. Sanghvi as the most anticipated and cherished
              annual socio-cultural, sports and technical festival. Trinity is a coalescence of
              innovation and technology, festivities and social responsibilities, and the
              competitive streak of sports. The grandeur of Trinity is sure to attract students
              not only from Mumbai but from colleges all around the world.
            </p>
            {/* <p className="text-base sm:text-lg leading-relaxed">
              The coveted IDPT trophy will be fought for by the students of the college. The
              department who shows exemplary teamwork and dedication will be the ones to lift this
              trophy. We are bound to have clashes between departments during the fest, but that
              will just make everyone hungrier to win it. The winner will take home bragging
              rights for a year, whereas those who don’t win will have that extra bit of
              motivation for next year. But remember the most important thing is to participate
              because as the saying goes, you either win or you learn.
            </p> */}
          </div>
          <div className="w-full md:w-2/5 mt-6 md:mt-0 flex justify-center">
            <img
              src="./trinity-cropped.png"
              alt="Trinity Logo"
              className="max-w-xs mx-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Principal Sir's Section */}
      <div id="Principals-msg" className="container section bg-black text-white py-10 px-4 sm:px-10">
        <div className="flex flex-col-reverse md:flex-row items-center md:space-x-8">
          <div className="w-full md:w-2/5 mb-6 md:mb-0">
            <img src={PrincipalSir} alt="Principal's Message" className="rounded-xl shadow-md w-3/4 md:w-full mx-auto" />
          </div>
          <div className="w-full md:w-3/5 md:pl-8 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl text-text_Colors-blue mb-4 font-abril">Principal's Message</h2>
            <p className="text-lg text-text_Colors-yellow font-abril mb-4">Dr. Hari Vasudevan</p>
            <p className="text-sm md:text-base leading-relaxed">
              In a short span of 30 years, Dwarkadas J. Sanghvi College of Engineering (DJSCE), an
              Autonomous Institution, affiliated to the University of Mumbai and owned by SVKM has
              come a long way and has made its impact felt not only in the country, but also
              abroad. Our students have been performing exceedingly well in national and globally
              competent multinational companies and also in the universities in India and abroad
              as they pursue their higher education.
            </p>
          </div>
        </div>
      </div>

      {/* Theme Section */}
      <div id="theme" className="container section bg-black text-white py-10 px-4 sm:px-10">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="w-full md:w-3/5 text-left">
            <h2 className="text-4xl md:text-5xl text-text_Colors-yellow mb-4 font-abril text-center md:text-left">Theme</h2>
            <p className="text-lg text-text_Colors-yellow font-abril text-center lg:text-left">Elements</p>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-center md:text-left mt-2">
            The theme revolving around the elements—Prithvi (Earth), Vayu (Air), Agni (Fire),
              Jal (Water), Samay (Time) and Vidyut (Electricity)—captures the essence of the
              natural forces that govern our world and existence. These elements symbolize the
              dynamic balance of life, each contributing uniquely to the cycle of creation,
              sustenance, and transformation. Together, they form an interconnected web that
              embodies both the physical and metaphysical realms, reflecting ancient wisdom and
              contemporary relevance.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
            As the ancient Sanskrit saying goes, "पञ्चमहाभूतानि देहस्य धारिणः" (Pancha
              Mahabhutani Dehasya Dharinah)—the five great elements are the bearers of the body,
              underscoring the profound connection between these elemental forces and our very
              being.
            </p>
          </div>
          <div className="w-full md:w-2/5 mt-6 md:mt-0 flex justify-center">
            <img
              src="./theme.png"
              alt="Theme"
              className="max-w-xs mx-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* <div className="container section bg-black text-white py-10 px-4 sm:px-10 sm:py-20">
      <div id="theme" className="container section bg-black text-white py-10 px-4 sm:px-10 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="w-full text-left lg:text-left">
            <h2 className="text-4xl md:text-5xl text-text_Colors-yellow text-center lg:text-left mb-4">Theme</h2>
            <p className="text-lg text-text_Colors-yellow font-abril text-center lg:text-left">Elements</p>
            <p className="text-sm md:text-base leading-relaxed text-center lg:text-left mt-4">
              The theme revolving around the elements—Prithvi (Earth), Vayu (Air), Agni (Fire),
              Jal (Water), Samay (Time) and Vidyut (Electricity)—captures the essence of the
              natural forces that govern our world and existence. These elements symbolize the
              dynamic balance of life, each contributing uniquely to the cycle of creation,
              sustenance, and transformation. Together, they form an interconnected web that
              embodies both the physical and metaphysical realms, reflecting ancient wisdom and
              contemporary relevance.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-center lg:text-left mt-4">
              As the ancient Sanskrit saying goes, "पञ्चमहाभूतानि देहस्य धारिणः" (Pancha
              Mahabhutani Dehasya Dharinah)—the five great elements are the bearers of the body,
              underscoring the profound connection between these elemental forces and our very
              being.
            </p>
          </div>
          <div className="w-full mt-6 lg:mt-0 flex justify-center lg:justify-end">
            <img
              src="./theme.png"
              alt="Theme"
              className="max-w-xs mx-auto rounded-lg shadow-md"
            />
          </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;