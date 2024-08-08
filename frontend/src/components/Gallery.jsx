import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://adminpanel-backend-aijl.onrender.com/api/gallery');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        setError('Error fetching images.');
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, []);

  const handleAddImage = async () => {
    try {
      const response = await fetch('https://adminpanel-backend-aijl.onrender.com/api/gallery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageUrl: newImageUrl }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const newImage = await response.json();
      setImages([...images, newImage]);
      setNewImageUrl('');
    } catch (error) {
      setError('Error adding image.');
      console.error('Error adding image:', error);
    }
  };

  const handleDeleteImage = async (id) => {
    try {
      const response = await fetch(`https://adminpanel-backend-aijl.onrender.com/api/gallery/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setImages(images.filter(image => image._id !== id));
    } catch (error) {
      setError('Error deleting image.');
      console.error('Error deleting image:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <input
          type="text"
          value={newImageUrl}
          onChange={(e) => setNewImageUrl(e.target.value)}
          placeholder="Enter image URL"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
        />
        <button
          onClick={handleAddImage}
          className="w-full bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
        >
          Add Image
        </button>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-100 text-red-800 border border-red-300 rounded-lg">
          {error}
        </div>
      )}

      {images.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <div key={image._id} className="relative bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden">
              <img src={image.imageUrl} alt="" className="w-full h-32 object-cover" />
              <button
                onClick={() => handleDeleteImage(image._id)}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-700">No images available.</div>
      )}
    </div>
  );
};

export default Gallery;
