import React from 'react';

const BookingSection: React.FC = () => {
  return (
    <div className="p-4 border-t mt-4">
      <h2 className="text-xl font-semibold mb-2">Book Tickets</h2>
      <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
        Book Now
      </button>
    </div>
  );
};

export default BookingSection;