import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const routes =
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/profile' element={<Profile/>} />
  </Routes>
</BrowserRouter>


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(routes);

