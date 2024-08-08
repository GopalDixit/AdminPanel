import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [contact, setContact] = useState({ name: '', email: '', subject: '', message: '' });

//   useEffect(() => {
//     const fetchContact = async () => {
//       try {
//         const response = await fetch('http://localhost:4800/api/contact');
//         const data = await response.json();
//         setContact(data);
//       } catch (error) {
//         console.error('Error fetching contact:', error);
//       }
//     };
//     fetchContact();
//   }, []);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://adminpanel-backend-aijl.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Optionally handle the response or update state
      const data = await response.json();
      console.log('Contact info updated:', data);
    } catch (error) {
      console.error('Error submitting contact:', error);
    }
  };
  

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mt-12">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Contact Info</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="subject"
          value={contact.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          value={contact.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Update Contact Info
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;
