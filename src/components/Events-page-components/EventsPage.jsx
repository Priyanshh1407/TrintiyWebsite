import React from 'react';
import "../../CSS/EventsPage.css";  // Import the separate CSS file

export default function EventsPage() {
    return (
        <div className="events-page bg-gradient-to-r from-black to-red-800 text-white min-h-screen">

            {/* Hero Section */}
            <div className="text-center py-16 bg-cover bg-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-yellow-300 font-bold">Events 2025</h1>
                <p className="text-lg sm:text-xl mt-4">We are back with our compeitiion and lot of memories!</p>
            </div>

            {/* Cards Section */}
            <div id="events" className="container mx-auto py-8 px-4">
                <div className="flex flex-wrap justify-center gap-6">
                        <a href="/cultural" className="block">
                            <div className="bg-white bg-opacity-50 rounded-lg text-center p-4 shadow-lg w-full sm:w-64 cursor-pointer">
                            <img src="cultural.jpg" alt="Cultural Events" className="rounded-lg w-full h-auto mb-4" />
                            <h3 className="text-lg font-bold">Cultural Events</h3>
                            </div>
                        </a>
                        <a href="/technical" className="block">
                            <div className="bg-white bg-opacity-50 rounded-lg text-center p-4 shadow-lg w-full sm:w-64">
                            <img src="technical.jpg" alt="Technical Events" className="rounded-lg w-full h-auto mb-4" />
                            <h3 className="text-lg font-bold">Technical Events</h3>
                            </div>
                        </a>
                        <a href="/sports" className="block">
                            <div className="bg-white bg-opacity-50 rounded-lg text-center p-4 shadow-lg w-full sm:w-64">
                            <img src="sports.jpg" alt="Sports Events" className="rounded-lg w-full h-auto mb-4" />
                            <h3 className="text-lg font-bold">Sports Events</h3>
                            </div>
                        </a>
                </div>
            </div>
        </div>
    );
}
