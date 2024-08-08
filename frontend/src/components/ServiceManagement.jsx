import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServiceManagement = () => {
    const [services, setServices] = useState([]);
    const [newService, setNewService] = useState({ title: '', description: '', icon: '' });

    useEffect(() => {
        axios.get('https://adminpanel-backend-aijl.onrender.com/api/services')
            .then(response => setServices(response.data))
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    const handleAddService = () => {
        axios.post('https://adminpanel-backend-aijl.onrender.com/api/services', newService)
            .then(response => {
                setServices([...services, response.data]);
                setNewService({ title: '', description: '', icon: '' });
            })
            .catch(error => console.error('Error adding service:', error));
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Service Management</h1>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add New Service</h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Title"
                        value={newService.title}
                        onChange={e => setNewService({ ...newService, title: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={newService.description}
                        onChange={e => setNewService({ ...newService, description: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="text"
                        placeholder="Icon Class"
                        value={newService.icon}
                        onChange={e => setNewService({ ...newService, icon: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button
                        onClick={handleAddService}
                        className="w-full bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                    >
                        Add Service
                    </button>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Service List</h2>
                <ul className="space-y-4">
                    {services.map(service => (
                        <li key={service._id} className="bg-white p-4 border border-gray-300 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                            <p className="text-gray-600 mb-2">{service.description}</p>
                            <i className={`fa ${service.icon} text-gray-500`} aria-hidden="true"></i>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ServiceManagement;
