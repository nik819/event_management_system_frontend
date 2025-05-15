import React from "react";
import Icon from "../components/utils/Icon";

const relatedEvents = [
  {
    id: 1,
    title: "Comedy Night with Zakir Khan",
    date: "Sat, 1 June 2025",
    venue: "NCPA, Mumbai",
    image: "/images/portfolio-01.jpg",
  },
  {
    id: 2,
    title: "The Great Indian Laughter",
    date: "Sun, 8 June 2025",
    venue: "RK Studios, Mumbai",
    image: "/images/portfolio2.jpg",
  },
  {
    id: 3,
    title: "Laugh Riot with Vir Das",
    date: "Fri, 13 June 2025",
    venue: "Pragati Maidan, Delhi",
    image: "/images/portfolio3.jpg",
  },
  {
    id: 4,
    title: "Stand-up Fiesta",
    date: "Tue, 17 June 2025",
    venue: "Nehru Stadium, Pune",
    image: "/images/portfolio4.jpg",
  },
];

const ShowEventDetails: React.FC = () => {
  return (
    <>
      <div className="mt-10 py-8 px-6 w-full h-[calc(100vh-40px)] flex bg-white gap-6">
        {/* Left Side - Event Description with background */}
        <div className="w-[60%] bg-gray-50 rounded-xl p-8 shadow-inner overflow-y-auto">
          {/* Event Title and Share Icon */}
          <div className="flex items-start justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800 leading-snug">
              Kisi Ko Batana Mat <br /> Ft. Anubhav Singh Bassi
            </h1>
            <Icon
              icon="share"
              className="h-5 w-5 text-gray-600 cursor-pointer mt-2"
            />
          </div>

          {/* Event Image */}
          <div className="mb-6">
            <img
              src="/images/one.jpg"
              alt="Kisi Ko Batana Mat Event"
              className="rounded-lg w-full h-64 object-cover"
            />
          </div>

          {/* Event Metadata */}
          <div className="space-y-6 text-gray-700">
            {/* Artist Section */}
            <div>
              <h2 className="text-lg font-semibold mb-1 text-gray-900">
                Artist
              </h2>
              <p className="text-sm">Anubhav Singh Bassi</p>
            </div>

            {/* About Section */}
            <div>
              <h2 className="text-lg font-semibold mb-1 text-gray-900">
                About the Event
              </h2>
              <p className="text-sm leading-relaxed">
                Join Anubhav Singh Bassi for a night of laughter and
                unforgettable stories. His latest act,{" "}
                <em>Kisi Ko Batana Mat</em>, explores everyday struggles with
                hilarious and relatable anecdotes that’ll leave you in stitches!
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Event Summary Card */}
        <div className="w-[40%] flex flex-col justify-between">
          <div className="bg-gray-100 rounded-lg p-6 shadow-md space-y-6">
            {/* Date */}
            <div className="flex items-center space-x-3">
              <Icon icon="calendar" className="h-5 w-5 text-red-600" />
              <span className="text-sm font-medium text-gray-800">
                Saturday, 25th May 2025 | 7:00 PM
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-3">
              <Icon icon="location-marker" className="h-5 w-5 text-red-600" />
              <span className="text-sm font-medium text-gray-800">
                Siri Fort Auditorium, Delhi
              </span>
            </div>

            {/* Artist Name */}
            <div className="flex items-center space-x-3">
              <Icon icon="user" className="h-5 w-5 text-red-600" />
              <span className="text-sm font-medium text-gray-800">
                Anubhav Singh Bassi
              </span>
            </div>

            {/* Age Limit */}
            <div className="flex items-center space-x-3">
              <Icon
                icon="shield-exclamation"
                className="h-5 w-5 text-red-600"
              />
              <span className="text-sm font-medium text-gray-800">
                18+ Only
              </span>
            </div>

            {/* Language */}
            <div className="flex items-center space-x-3">
              <Icon icon="chat" className="h-5 w-5 text-red-600" />
              <span className="text-sm font-medium text-gray-800">Hindi</span>
            </div>

            {/* Comedy Type */}
            <div className="flex items-center space-x-3">
              <Icon icon="emoji-happy" className="h-5 w-5 text-red-600" />
              <span className="text-sm font-medium text-gray-800">
                Stand-up Comedy
              </span>
            </div>

            {/* Pay Now Button */}
            <div className="mt-6">
              <button className="w-full bg-gray-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition duration-300">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Events Section */}
      <div className="mt-12 px-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Related Events
        </h2>
        <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {relatedEvents.map((event) => (
            <div
              key={event.id}
              className="min-w-[250px] bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="rounded-t-lg w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1 text-gray-900">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">{event.date}</p>
                <p className="text-sm text-gray-600">{event.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowEventDetails;
