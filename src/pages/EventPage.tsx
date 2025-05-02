import React from "react";
import { Event } from "../components/type/Event";
import EventBanner from "../components/EventBanner";
import EventDetails from "../components/EventDetails";
import BookingSection from "../components/BookingSection";
import RelatedEvents from "../components/RelatedEvents";

export const events: Event[] = [
  {
    id: 1,
    title: "Live Concert: Arijit Singh",
    bannerUrl: "/images/arijit-banner.jpg",
    date: "2025-06-15",
    time: "7:00 PM",
    venue: "NSCI Dome, Mumbai",
    description:
      "Experience the magic of Arijit Singh live in concert! Experience the magic of Arijit Singh live in concert! Experience the magic of Arijit Singh live in concert! Experience the magic of Arijit Singh live in concert!",
    relatedEvents: [],
  },
  {
    id: 3,
    title: "Sunburn Festival 2025",
    bannerUrl: "/images/sunburn.jpg",
    date: "2025-12-27",
    time: "2:00 PM",
    venue: "Vagator Beach, Goa",
    description:
      "Asia’s biggest EDM music festival is back with top global DJs. Asia’s biggest EDM music festival is back with top global DJs. Asia’s biggest EDM music festival is back with top global DJs.",
    relatedEvents: [],
  },
  {
    id: 4,
    title: "Shreya Ghoshal Live",
    bannerUrl: "/images/shreya-ghoshal.jpg",
    date: "2025-08-10",
    time: "6:30 PM",
    venue: "Bangalore Palace Grounds, Bangalore",
    description: "A night of soulful music with Shreya Ghoshal.",
    relatedEvents: [],
  },
  {
    id: 5,
    title: "Zakir Khan - Haq Se Standup",
    bannerUrl: "/images/zakir-khan.jpg",
    date: "2025-07-22",
    time: "8:00 PM",
    venue: "Jawaharlal Nehru Stadium, Delhi",
    description: "Zakir Khan returns with his hilarious new stand-up show.",
    relatedEvents: [],
  },
  {
    id: 6,
    title: "Techno Therapy",
    bannerUrl: "/images/techno-therapy.jpg",
    date: "2025-09-14",
    time: "10:00 PM",
    venue: "antiSOCIAL, Mumbai",
    description: "Get lost in hypnotic techno beats with top underground DJs.",
    relatedEvents: [],
  },
  {
    id: 7,
    title: "Dandiya Nights with Falguni Pathak",
    bannerUrl: "/images/falguni-pathak.jpg",
    date: "2025-10-11",
    time: "7:30 PM",
    venue: "Goregaon Sports Club, Mumbai",
    description: "Join the ultimate Navratri celebration with Falguni Pathak.",
    relatedEvents: [],
  },
  {
    id: 8,
    title: "Bollywood Retro Night",
    bannerUrl: "/images/retro-night.jpg",
    date: "2025-08-05",
    time: "8:00 PM",
    venue: "Phoenix Marketcity, Pune",
    description:
      "Dance to your favorite retro Bollywood tracks all night long.",
    relatedEvents: [],
  },
  {
    id: 9,
    title: "AR Rahman Symphony Night",
    bannerUrl: "/images/ar-rahman.jpg",
    date: "2025-11-03",
    time: "7:00 PM",
    venue: "Chennai Trade Centre, Chennai",
    description:
      "A live symphonic performance featuring the maestro AR Rahman.",
    relatedEvents: [],
  },
  {
    id: 10,
    title: "Comedy Carnival 2025",
    bannerUrl: "/images/comedy-carnival.jpg",
    date: "2025-09-20",
    time: "6:00 PM",
    venue: "Laugh Club, Hyderabad",
    description:
      "A night full of laughter with India’s top stand-up comedians.",
    relatedEvents: [],
  },
];

const EventPage: React.FC = () => (
  <div className="p-5 flex flex-wrap gap-5">
    <EventDetails event={events} />
  </div>
);

export default EventPage;
