import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '', icon: '' });
  const [editService, setEditService] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4800/api/services')
      .then(response => setServices(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editService) {
      axios.put(`http://localhost:4800/api/services/${editService._id}`, formData)
        .then(response => {
          setServices(services.map(service => service._id === editService._id ? response.data : service));
          setFormData({ title: '', description: '', image: '', icon: '' });
          setEditService(null);
        })
        .catch(error => {
          console.error('Error updating service:', error.response ? error.response.data : error.message);
        });
    } else {
      axios.post('http://localhost:4800/api/services', formData)
        .then(response => {
          setServices([...services, response.data]);
          setFormData({ title: '', description: '', image: '', icon: '' });
        })
        .catch(error => {
          console.error('Error adding service:', error.response ? error.response.data : error.message);
        });
    }
  };

  const handleEdit = (service) => {
    setFormData({ title: service.title, description: service.description, image: service.image, icon: service.icon });
    setEditService(service);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4800/api/services/${id}`)
      .then(() => setServices(services.filter(service => service._id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-8">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">{editService ? 'Edit Service' : 'Add New Service'}</h2>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          
          <input
            name="icon"
            value={formData.icon}
            onChange={handleChange}
            placeholder="Icon URL"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
          >
            {editService ? 'Update' : 'Add'} Service
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map(service => (
          <div key={service._id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <img src={service.icon} alt={`${service.title} icon`} className="w-16 h-16 object-cover p-2" />
            <div className="p-4">
              <h5 className="text-xl font-bold mb-2">{service.title}</h5>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between">
                <button
                  onClick={() => handleEdit(service)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(service._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
