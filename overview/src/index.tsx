import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Control from './pages/Control';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import { ContextProvider } from './contexts/AppContext';

const routes =
<BrowserRouter>
  <ContextProvider>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/dashboard' element={ <Control item={<Dashboard/>} /> } />
      <Route path='/profile' element={ <Control item={<Profile/>} /> } />
      <Route path='/detail/:id' element={ <Control item={<Detail/>} /> } />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  </ContextProvider>
</BrowserRouter>


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(routes);

