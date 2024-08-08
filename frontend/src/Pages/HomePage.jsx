import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/homeDashboard/Carousel'; 

const HomePage = () => {
  const navigate = useNavigate();

  const goToAdminDashboard = () => {
    navigate('/admin');
  };

  const goToHomePageEditor = () => {
    navigate('/api/homeoption');
  };
  const goToAbout = () => {
    navigate('/api/content');
  };
  const goToService = () => {
    navigate('/api/service');
  };
  const goToGallery = () => {
    navigate('/api/gallery');
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-white text-2xl font-bold">MyApp</a>
          <div>
            <button
              onClick={goToAdminDashboard}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
            >
              Contact Info
            </button>
            <button
              onClick={goToHomePageEditor}
              className="ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300"
            >
              Edit Home Page
            </button>
            <button
              onClick={goToAbout}
              className="ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300"
            >
              Edit About Page
            </button>
            <button
              onClick={goToService}
              className="ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300"
            >
              Edit Service Page
            </button>
            <button
              onClick={goToGallery}
              className="ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300"
            >
              Edit Gallery Page
            </button>
          </div>
        </div>
      </nav>

      <header className="bg-blue-500 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Welcome to MyApp</h1>
        <p className="mt-4 text-xl">Your one-stop solution for all your needs</p>
        <a
          href="#learn-more"
          className="inline-block mt-6 bg-yellow-500 text-black px-6 py-3 rounded hover:bg-yellow-600 transition duration-300"
        >
          Learn More
        </a>
      </header>


      <section id="learn-more" className="p-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Feature 1</h2>
              <p>Details about feature 1.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Feature 2</h2>
              <p>Details about feature 2.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Feature 3</h2>
              <p>Details about feature 3.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
