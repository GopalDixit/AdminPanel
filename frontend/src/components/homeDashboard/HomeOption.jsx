import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomeOption() {
  const navigate = useNavigate();

  const goToCarousle = () => {
    navigate('/api/carouselitems');
  };

  const goToHomeService = () => {
    navigate('/api/homepageservice');
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-white shadow-md rounded-lg max-w-sm mx-auto mt-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Manage Home Page Options</h1>
      <button
        onClick={goToCarousle}
        className="w-full bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
      >
        Edit Carousel in Home Page
      </button>
      <button
        onClick={goToHomeService}
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
      >
        Edit Home Service in Home Page
      </button>
    </div>
  );
}

export default HomeOption;
