import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Carousel = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({ title: '', subtitle: '', description: '', image: '' });
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    axios.get('https://adminpanel-fback.onrender.com/api/carousel')
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem) {
      axios.put(`https://adminpanel-fback.onrender.com/api/carousel/${editItem._id}`, formData)
        .then(response => {
          setItems(items.map(item => item._id === editItem._id ? response.data : item));
          setFormData({ title: '', subtitle: '', description: '', image: '' });
          setEditItem(null);
        })
        .catch(error => console.error(error));
    } else {
      axios.post('https://adminpanel-fback.onrender.com/api/carousel', formData)
        .then(response => {
          setItems([...items, response.data]);
          setFormData({ title: '', subtitle: '', description: '', image: '' });
        })
        .catch(error => console.error(error));
    }
  };

  const handleEdit = (item) => {
    setFormData({ title: item.title, subtitle: item.subtitle, description: item.description, image: item.image });
    setEditItem(item);
  };

  const handleDelete = (id) => {
    axios.delete(`https://adminpanel-fback.onrender.com/api/carousel/${id}`)
      .then(() => setItems(items.filter(item => item._id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <form onSubmit={handleSubmit} className="mb-8 space-y-4 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">{editItem ? 'Edit Item' : 'Add New Item'}</h2>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          name="subtitle"
          value={formData.subtitle}
          onChange={handleChange}
          placeholder="Subtitle"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
        >
          {editItem ? 'Update' : 'Add'} Item
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <div key={item._id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h5 className="text-xl font-bold mb-1">{item.title}</h5>
              <h6 className="text-lg text-gray-700 mb-2">{item.subtitle}</h6>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between">
                <button
                  onClick={() => handleEdit(item)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
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

export default Carousel;
