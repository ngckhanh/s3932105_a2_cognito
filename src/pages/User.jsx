import React, { useState, useEffect } from "react";
import AddCat from "./AddCat";
import { Link } from 'react-router-dom';

function User() {
  const [authenticated, setAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const role = sessionStorage.getItem('userRole');

    if (role === 'User' || role === 'Admin') {
      setAuthenticated(true);
      setUserRole(role);
    } else {
      setAuthenticated(false);
      setUserRole(null);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('userRole');
    window.location.href = 'https://s3932105.auth.us-east-1.amazoncognito.com/logout?client_id=7bckgr923mbj59cedeqp0smbug&logout_uri=http://localhost:8000/logged_out.html';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {authenticated ? (
        <div className="w-full bg-white m-10 p-10 rounded-lg shadow-lg max-w-3xl">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold mb-6 text-pink-950">User Dashboard</h1>
              <p className="text-lg text-gray-700 mb-6">
              Welcome, User! Add the cats.
              </p>
            </div>

            <div className="flex">
              <button onClick={handleLogout}
                className="h-[50px] px-6 py-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 transition-colors">
                Logout
              </button>
            </div>
          </div>


          <AddCat />
        </div>
      ) : (
        <div className="bg-white m-10 p-10 rounded-lg shadow-lg max-w-3xl text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Please Log In</h1>
          <p className="text-lg text-gray-600 mb-6">
            To access your dashboard, please log in or register.
          </p>
          <div className="flex flex-row items-center justify-center space-x-4 mb-6">
            <Link to="https://s3932105.auth.us-east-1.amazoncognito.com/login?client_id=7bckgr923mbj59cedeqp0smbug&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Flocalhost%3A8000%2Flogged_in.html">
              <button className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-800 transition-colors">
                Log In
              </button>
            </Link>
            <Link to="https://s3932105.auth.us-east-1.amazoncognito.com/signup?client_id=7bckgr923mbj59cedeqp0smbug&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Flocalhost%3A8000%2Flogged_in.html">
              <button className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-800 transition-colors">
                Register
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default User;
