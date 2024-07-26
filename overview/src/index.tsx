import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './useRedux/store';

// Import Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Control from './pages/Control';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import { ContextProvider } from './contexts/AppContext';
import Likes from './pages/Likes';
import Search from './pages/Search';
import Todo from './pages/Todo';


const routes =
<BrowserRouter>
  <Provider store={store}>
    <ContextProvider>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={ <Control item={<Dashboard/>} /> } />
        <Route path='/profile' element={ <Control item={<Profile/>} /> } />
        <Route path='/detail/:id' element={ <Control item={<Detail/>} /> } />
        <Route path='/likes' element={ <Control item={<Likes/>} /> } />
        <Route path='/search' element={ <Control item={<Search/>} /> } />
        <Route path='/todo' element={ <Control item={<Todo/>} /> } />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </ContextProvider>
    </Provider>
</BrowserRouter>



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(routes);

