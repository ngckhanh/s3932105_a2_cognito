import React, { useState, useEffect } from 'react';
import { getAllCats } from '../scripts/catService'; 
import { Link } from 'react-router-dom';

const CatList = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    // Fetch all cats from local storage
    const fetchedCats = getAllCats();
    setCats(fetchedCats);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">All Cats</h1>
        <div className="space-y-4">
          {cats.length === 0 ? (
            <p className="text-gray-500">No cats available.</p>
          ) : (
            cats.map((cat, index) => (
              <div key={index} className="border p-4 rounded-md shadow-sm bg-gray-50">
                <h2 className="text-xl font-semibold text-gray-800">{cat.name}</h2>
                <p className="text-gray-700"><strong>Breed:</strong> {cat.breed}</p>
                <p className="text-gray-700"><strong>Age:</strong> {cat.age} years</p>
                <p className="text-gray-700"><strong>Owner:</strong> {cat.owner}</p>
              </div>
            ))
          )}
        </div>
        <Link to="/user">
          <button
            className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Add More Cat!!!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CatList;
