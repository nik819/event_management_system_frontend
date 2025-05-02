import React from "react";
import { Event } from "./type/Event";
import Icon from "./utils/Icon";

interface EventDetailsProps {
  event: Event[]; // or rename to `events` if you prefer
}

const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  console.log("event", event); // should log your array
  return (
    <>
      {Array.isArray(event) &&
        event.map((eventItem: Event) => (
          <div key={eventItem.id} className="w-[300px]">
            <div className="flex flex-col justify-between bg-white/95 h-[100%] shadow-lg shadow-black/40 rounded-md gap-2">
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
              </div>
              <div className="flex gap-1 justify-between w-full">
                <div className="flex bg-gray-200 w-1/2 rounded-tr-md">
                  <Icon icon="user" className="w-10 h-10" />
                  <div className="flex flex-col">
                    <span>10%</span>
                    <span>Male</span>
                  </div>
                </div>
                <div className="flex bg-gray-200 w-1/2 rounded-tl-md">
                  <Icon icon="user" className="w-10 h-10" />

                  <div className="flex flex-col">
                    <span>90%</span>
                    <span>Female</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default EventDetails;
