import React, { useState, useEffect } from 'react';

const HomePageEditor = () => {
  const [content, setContent] = useState({ title: '', description: '' });

  useEffect(() => {
    fetch('https://adminpanel-backend-aijl.onrender.com/api/services')
      .then(response => response.json())
      .then(data => setContent(data))
      .catch(error => console.error(error));
  }, []);

  const handleChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update home page content
    fetch('https://adminpanel-backend-aijl.onrender.com/api/services', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(content),
    })
      .then(response => response.json())
      .then(() => alert('Home page content updated successfully'))
      .catch(error => console.error(error));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Edit Home Page Content</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={content.title}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={content.description}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Update</button>
      </form>
    </div>
  );
};

export default HomePageEditor;
