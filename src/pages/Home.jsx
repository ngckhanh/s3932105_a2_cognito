import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="bg-white m-10 p-10 rounded-lg shadow-lg max-w-3xl text-center">
                <h1 className="text-4xl font-bold mb-4 text-pink-950">Welcome to the Cat Haven!</h1>
                <p className="text-lg text-gray-600 mb-6">
                    Discover the fascinating world of cats. From adorable kittens to majestic adults, we have it all.
                </p>

                <div className='w-full h-[300px] flex items-center justify-center mb-6'>
                    <img
                        src="/Bim.jpg"
                        alt="Cute Cat"
                        className="w-auto h-full rounded-lg shadow-md"
                    />
                </div>

                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Fun Cat Facts:</h2>
                <ul className="text-left text-gray-600 mb-6">
                    <li className="mb-2">Cats have five toes on their front paws, but only four on the back paws.</li>
                    <li className="mb-2">A group of cats is called a 'clowder'.</li>
                    <li className="mb-2">Cats sleep for about 70% of their lives.</li>
                    <li className="mb-2">The world's oldest cat lived to be 38 years old!</li>
                </ul>

                <Link to="/cats" className="px-6 py-2 bg-pink-600 text-white font-semibold rounded-md hover:bg-pink-700 transition-colors">
                    Explore Cats
                </Link>
            </div>
        </div>
    );
}

export default Home;
