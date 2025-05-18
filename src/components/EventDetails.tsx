import React, { useState } from "react";
import { Event } from "./type/Event";
import Icon from "./utils/Icon";
import { useNavigate } from "react-router-dom";

interface EventDetailsProps {
  event: Event[];
}

const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState<string>("All");

  // Extract unique cities from the event list
  const cities = Array.from(new Set(event.map((e) => e.venue)));

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  // Filter events based on selected city
  const filteredEvents =
    selectedCity === "All"
      ? event
      : event.filter((e) => e.venue === selectedCity);

  return (
    <div className="px-6 py-8 bg-gray-50 min-h-screen w-full">
      {/* City Filter Dropdown */}
      <div className="max-w-md mx-auto mb-8">
        <label
          htmlFor="city-filter"
          className="block mb-2 text-lg font-semibold text-gray-700"
        >
          Filter by City:
        </label>
        <select
          id="city-filter"
          value={selectedCity}
          onChange={handleCityChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="All">All Cities</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Event Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {filteredEvents.length === 0 ? (
          <div className="text-gray-500 text-lg">No events found.</div>
        ) : (
          filteredEvents.map((eventItem: Event) => (
            <div
              key={eventItem.id}
              className="max-w-xs bg-white rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
              onClick={() => navigate("/details")}
            >
              <div className="">
                <div>
                  <img
                    src="images/portfolio-01.jpg"
                    alt=""
                    className="h-[200px] w-[300px] rounded-tr-md rounded-tl-md"
                  />
                </div>
                <div className="flex flex-col gap-4 px-4">
                  <div>
                    <span className="font-bold text-2xl">
                      {eventItem.title}
                    </span>
                    <div className="flex flex-col">
                      <span>{eventItem.venue}</span>
                      <span className="text-gray-400 text-sm">
                        {eventItem.date}
                        {eventItem.time}
                      </span>
                    </div>
                    <div className="line-clamp-4">{eventItem.description}</div>
                  </div>
                </div>
                {/* Limit description height and allow ellipsis */}
                <p className="text-gray-700 line-clamp-4 flex-grow">
                  {eventItem.description}
                </p>
              </div>

              {/* Bottom Gender Stats */}
              <div className="flex divide-x border-t border-gray-200 text-gray-600 rounded-b-lg">
                <div className="flex items-center justify-center w-1/2 gap-2 p-3 bg-gray-100 rounded-bl-lg">
                  <Icon icon="user" className="w-6 h-6 text-gray-700" />
                  <div className="flex flex-col text-sm">
                    <span>10%</span>
                    <span>Male</span>
                  </div>
                </div>
                <div className="flex items-center justify-center w-1/2 gap-2 p-3 bg-gray-100 rounded-br-lg">
                  <Icon icon="user" className="w-6 h-6 text-gray-700" />
                  <div className="flex flex-col text-sm">
                    <span>90%</span>
                    <span>Female</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EventDetails;
