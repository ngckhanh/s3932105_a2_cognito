import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className='min-h-screen bg-[#C5DCFF] bg-opacity-50 flex flex-col'>
      {/* Navigation Bar */}
      <nav className='flex justify-around bg-pink-300 text-white p-4'>
        <Link
          to="/"
          className='px-4 py-2 rounded hover:bg-pink-950 transition-colors duration-200'
        >
          Home
        </Link>

        <Link
          to="/cats"
          className='px-4 py-2 rounded hover:bg-pink-950 transition-colors duration-200'
        >
          Cats
        </Link>

        <Link
          to="/user"
          className='px-4 py-2 rounded hover:bg-pink-950 transition-colors duration-200'
        >
          User Dashboard
        </Link>

        <Link
          to="/admin"
          className='px-4 py-2 rounded hover:bg-pink-950 transition-colors duration-200'
        >
          Admin Dashboard
        </Link>
      </nav>

      <div className=''>
        <Outlet />
      </div>

    </div>
  );
}

export default App;
