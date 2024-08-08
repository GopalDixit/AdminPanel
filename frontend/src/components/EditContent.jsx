import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditContent() {
    const [content, setContent] = useState({
        title: '',
        subtitle: '',
        description: '',
        feature1: '',
        feature2: '',
        feature3: '',
        image1: '',
        image2: ''
    });

    useEffect(() => {
        axios.get('https://adminpanel-fback.onrender.com/api/content/content')
            .then(response => setContent(response.data))
            .catch(error => console.error('Error fetching content:', error));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContent(prevContent => ({ ...prevContent, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://adminpanel-fback.onrender.com/api/content/content', content)
            .then(response => alert('Content updated!'))
            .catch(error => console.error('Error updating content:', error));
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit About</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input 
                            type="text" 
                            name="title" 
                            value={content.title} 
                            onChange={handleChange} 
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                            placeholder="Title"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Subtitle</label>
                        <input 
                            type="text" 
                            name="subtitle" 
                            value={content.subtitle} 
                            onChange={handleChange} 
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                            placeholder="Subtitle"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea 
                        name="description" 
                        value={content.description} 
                        onChange={handleChange} 
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                        placeholder="Description"
                        rows="4"
                    />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Feature 1</label>
                        <input 
                            type="text" 
                            name="feature1" 
                            value={content.feature1} 
                            onChange={handleChange} 
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                            placeholder="Feature 1"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Feature 2</label>
                        <input 
                            type="text" 
                            name="feature2" 
                            value={content.feature2} 
                            onChange={handleChange} 
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                            placeholder="Feature 2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Feature 3</label>
                        <input 
                            type="text" 
                            name="feature3" 
                            value={content.feature3} 
                            onChange={handleChange} 
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                            placeholder="Feature 3"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image 1</label>
                        {content.image1 && (
                            <div className="relative w-full h-40 bg-gray-100 rounded-md overflow-hidden">
                                <img 
                                    src={content.image1} 
                                    alt="Image 1" 
                                    className="object-cover w-full h-full" 
                                />
                            </div>
                        )}
                        <input 
                            type="text" 
                            name="image1" 
                            value={content.image1} 
                            onChange={handleChange} 
                            className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                            placeholder="Image 1 URL"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image 2</label>
                        {content.image2 && (
                            <div className="relative w-full h-40 bg-gray-100 rounded-md overflow-hidden">
                                <img 
                                    src={content.image2} 
                                    alt="Image 2" 
                                    className="object-cover w-full h-full" 
                                />
                            </div>
                        )}
                        <input 
                            type="text" 
                            name="image2" 
                            value={content.image2} 
                            onChange={handleChange} 
                            className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" 
                            placeholder="Image 2 URL"
                        />
                    </div>
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
}

export default EditContent;
