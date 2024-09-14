import React, { useState, useEffect } from 'react';
import { getAllCats, deleteCatById } from '../scripts/catService';
import { Link } from 'react-router-dom';

function Admin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [cats, setCats] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const role = sessionStorage.getItem('userRole');

    if (role === 'Admin') {
      setAuthenticated(true);
      setUserRole(role);
      fetchCats(); // Fetch the list of cats
    } else {
      setAuthenticated(false);
      setUserRole(null);
    }
  }, []);

  const fetchCats = () => {
    // Fetch the list of cats from local storage
    setCats(getAllCats());
  };

  const handleLogout = () => {
    sessionStorage.removeItem('userRole');
    window.location.href = 'https://s3932105.auth.us-east-1.amazoncognito.com/logout?client_id=7bckgr923mbj59cedeqp0smbug&logout_uri=http://localhost:8000/logged_out.html';
  };

  const handleDeleteCat = (id) => {
    // Delete the cat from local storage
    deleteCatById(id);

    // Update the state to remove the deleted cat from the UI
    setCats(cats.filter(cat => cat.id !== id));

    setSuccessMessage(`Successfully deleted cat with ID: ${id}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {authenticated ? (
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-4xl w-full">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold mb-6 text-pink-950">Admin Dashboard</h1>
              <p className="text-lg text-gray-700 mb-6">
                Welcome, Admin! Manage the cats submitted by users.
              </p>
            </div>

            <div className="flex">
              <button onClick={handleLogout}
                className="h-[50px] px-6 py-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 transition-colors">
                Logout
              </button>
            </div>
          </div>

          {successMessage && (
            <p className="text-green-500 mb-4">{successMessage}</p> // Display success message
          )}

          <h2 className="text-2xl font-semibold mb-4 text-gray-800">List of Cats:</h2>
          <div className="overflow-x-auto">
            {cats.length === 0 ? (
              <p className="text-center text-gray-600 py-4">No data found</p>
            ) : (
              <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
                <thead className="bg-gray-200 border-b">
                  <tr>
                    <th className="py-3 px-4 text-left text-gray-600">ID</th>
                    <th className="py-3 px-4 text-left text-gray-600">Name</th>
                    <th className="py-3 px-4 text-left text-gray-600">Breed</th>
                    <th className="py-3 px-4 text-left text-gray-600">Age</th>
                    <th className="py-3 px-4 text-left text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cats.map(cat => (
                    <tr key={cat.id} className="border-b">
                      <td className="py-2 px-4 text-gray-700">{cat.id}</td>
                      <td className="py-2 px-4 text-gray-700">{cat.name}</td>
                      <td className="py-2 px-4 text-gray-700">{cat.breed}</td>
                      <td className="py-2 px-4 text-gray-700">{cat.age}</td>
                      <td className="py-2 px-4">
                        <button
                          onClick={() => handleDeleteCat(cat.id)}
                          className="text-red-500 hover:text-red-700 focus:outline-none"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Please Log In</h1>
          <p className="text-lg text-gray-600 mb-6">
            To access the admin dashboard, please log in with an admin account.
          </p>
          <div className="flex flex-row items-center justify-center space-x-4 mb-6">
            <Link to="https://s3932105.auth.us-east-1.amazoncognito.com/login?client_id=7bckgr923mbj59cedeqp0smbug&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Flogged_in.html">
              <button className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-800 transition-colors">
                Log In
              </button>
            </Link>
            <Link to="https://s3932105.auth.us-east-1.amazoncognito.com/signup?client_id=7bckgr923mbj59cedeqp0smbug&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Flogged_in.html">
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

export default Admin;
