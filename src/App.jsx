import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className='min-h-screen bg-[#C5DCFF] bg-opacity-50 flex flex-col'>
      {/* Navigation Bar */}
      <nav className='flex justify-around bg-pink-300 text-white p-4'>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded transition-colors duration-200 ${isActive ? 'bg-white text-pink-950' : 'hover:bg-pink-950'}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/cats"
          className={({ isActive }) =>
            `px-4 py-2 rounded transition-colors duration-200 ${isActive ? 'bg-white text-pink-950' : 'hover:bg-pink-950'}`
          }
        >
          Cats
        </NavLink>

        <NavLink
          to="/user"
          className={({ isActive }) =>
            `px-4 py-2 rounded transition-colors duration-200 ${isActive ? 'bg-white text-pink-950' : 'hover:bg-pink-950'}`
          }
        >
          User Dashboard
        </NavLink>

        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `px-4 py-2 rounded transition-colors duration-200 ${isActive ? 'bg-white text-pink-950' : 'hover:bg-pink-950'}`
          }
        >
          Admin Dashboard
        </NavLink>
      </nav>

      <div className='flex-grow'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
