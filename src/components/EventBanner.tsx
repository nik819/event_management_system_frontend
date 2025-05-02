import React from 'react';
import { Event } from './type/Event';

const EventBanner: React.FC<{ event: Event }> = ({ event }) => (
  <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${event.bannerUrl})` }}>
    <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-white text-3xl font-bold">
      {event.title}
    </div>
  </div>
);

export default EventBanner;