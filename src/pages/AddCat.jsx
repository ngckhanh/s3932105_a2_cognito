import React, { useState } from 'react';

const LOCAL_STORAGE_KEY = 'cats';

const getNextId = () => {
    const cats = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    const maxId = cats.reduce((max, cat) => Math.max(max, cat.id || 0), 0);
    return maxId + 1;
};

const AddCat = () => {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');
    const [owner, setOwner] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCat = {
            id: getNextId(), // Assign a unique ID to the new cat
            name,
            breed,
            age: parseInt(age),
            owner
        };

        // Save to local storage
        const cats = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
        cats.push(newCat);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cats));

        setSuccessMessage('Cat added successfully!');

        // Reset form
        setName('');
        setBreed('');
        setAge('');
        setOwner('');

        // Clear success message after 3 seconds
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    return (
        <div className="bg-[#C5DCFF] bg-opacity-30 p-6 rounded-lg shadow-xl max-w-md mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Add a New Cat</h2>
            <form onSubmit={handleSubmit} className="gap-4 grid grid-cols-2">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter cat's name"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Breed</label>
                    <input
                        type="text"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                        placeholder="Enter cat's breed"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Age</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Enter cat's age"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Owner</label>
                    <input
                        type="text"
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                        placeholder="Enter owner's name"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                {successMessage && <p className="col-span-2 text-green-600 mb-2">{successMessage}</p>}

                <button
                    type="submit"
                    className="mt-3 col-span-2 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                >
                    Add Cat
                </button>
            </form>
        </div>
    );
};

export default AddCat;
