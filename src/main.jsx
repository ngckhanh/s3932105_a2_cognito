import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import User from './pages/User';
import Admin from './pages/Admin';
import CatList from './pages/CatList';
import AddCat from './pages/AddCat';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="user" element={<User />} />
          <Route path="admin" element={<Admin />} />
          <Route path="/cats" element={<CatList />} />
          <Route path="/addcat" element={<AddCat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
