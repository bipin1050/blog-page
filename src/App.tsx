import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import BlogDetails from './components/BlogDetails';
import Headers from './components/Headers';
import Footer from './components/Footer';
import AddBlog from './components/AddBlog';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Headers />
      <div className='flex-1'>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/blogs' element={<HomePage />}/>
          <Route path='/blogs/:id' element={<BlogDetails />}/>
          <Route path='/addblog' element={<AddBlog />}/>
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
    
  );
}

export default App;
