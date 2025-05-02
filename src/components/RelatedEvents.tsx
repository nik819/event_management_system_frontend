import React from 'react';
import { Event } from './type/Event';

const RelatedEvents: React.FC<{ events: Event[] }> = ({ events }) => (
  <div className="p-4">
    <h2 className="text-xl font-semibold mb-2">Related Events</h2>
    <div className="grid grid-cols-2 gap-4">
      {events.map((e) => (
        <div key={e.id} className="border rounded p-2">
          <img src={e.bannerUrl} alt={e.title} className="w-full h-32 object-cover rounded" />
          <h3 className="mt-2 text-lg font-medium">{e.title}</h3>
        </div>
      ))}
    </div>
  </div>
);

export default RelatedEvents;
