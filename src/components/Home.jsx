import React from "react";
import "../CSS/HomePage.css";  // Import the separate CSS file
import PrincipalSir from "../images/principal_sir.jpg";

function Home() {
    return (
        <div className="bg-black text-white min-h-screen">

            {/* Heading Section */}
            <div id="heading" className="section section-heading" style={{ fontSize: '80px' }}>
                27th-29th<br />
                MARCH 2025
            </div>

            {/* About Section with Background Image */}
            <div id="about" className="section about-section bg-black text-white py-12">
                <div className="container mx-auto px-6 flex flex-wrap items-center">
                    {/* Text Content */}
                    <div className="w-full md:w-3/5 text-left">
                        <h2 className="text-5xl text-text_Colors-yellow mb-4 font-abril font-normal">About Us</h2>
                        <p className="text-lg leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisi vitae nibh convallis tincidunt. Mauris euismod, magna id consequat malesuada, leo nisl aliquet nisi, ut lacinia lorem augue id quam. Fusce quis lacus quis turpis ullamcorper sollicitudin.
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                            In hac habitasse platea dictumst. Morbi vulputate, sapien quis sagittis consequat, erat elit rhoncus arcu, id consectetur libero lectus vitae lacus.
                        </p>
                    </div>

                    {/* Image/Video Content */}
                    <div className="w-full md:w-2/5 flex justify-center mt-8 md:mt-0 relative -top-12">
                        {/* If it's a video */}
                        <video autoPlay muted loop className="rounded-lg shadow-lg w-3/4 md:w-full -mt-24">
                            <source src="../images/earth.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>


            {/* Principal's Message Section with Background Image */}
            <div id="Principals-msg" className="section principal-section bg-black text-white py-12">
                <div className="container mx-auto px-6 text-left flex flex-wrap flex-row items-center">
                    <div className="w-full md:w-2/5">
                        <img src={PrincipalSir} alt="Principal's Message" className="rounded-xl shadow-lg" />
                    </div>
                    <div className="w-1/2 pl-8">
                        <h2 className="text-5xl text-text_Colors-blue mb-4 font-abril font-normal">Principal's Message</h2>
                        <p className="text-base sm:text-lg leading-relaxed ">
                            In a short span of 28 years, Dwarkadas J. Sanghvi College of Engineering
                            (DJSCE), an Autonomous Institution, affiliated to the University of
                            Mumbai and owned by SVKM has come a long way and has made its impact
                            felt not only in the country, but also abroad. Our students have been
                            performing exceedingly well in national and globally competent
                            multinational companies and also in the universities in India and abroad
                            as they pursue their higher education.
                        </p>
                    </div>
                </div>
            </div>


            {/* Theme Section with Background Image */}
            <div id="Theme" className="section theme-section bg-black text-white py-12">
                <div className="container mx-auto px-6 text-left flex flex-col">
                    <p className='text-yellow-300 mb-0'>Theme</p>
                    <h2 className="text-5xl text-text_Colors-yellow mb-4 font-abril font-normal">Elements</h2>
                    <div className="w-full md:w-3/5 text-left">
                        <p className="text-lg flex flex-wrap">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisl vitae nibh convallis tincidunt. Mauris euismod, magna id consequat malesuada, leonisi aliquet nisi, ut lacinia lorem augue id quam. Fusce quis lacus quisturpis ullamcorper sollicitudin. In hac habitasse platea dictumst. Morbivulputate, sapien quis sagittis consequat, erat elit rhoncus arcu, id consectetur libero lectus vitae lacus. Donec vel leo quis lorem luctus attis. Pellentesque habitant morbi tristique senectus et netus etmalesuada fames ac turpis egestas.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
