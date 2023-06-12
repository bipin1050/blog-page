import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import BlogDetails from './components/BlogDetails';
import Headers from './components/Headers';
import Footer from './components/Footer';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Headers />
      <div className='flex-1'>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/blogs' element={<HomePage />}/>
          <Route path='/blogs/:id' element={<BlogDetails />}/>
        </Routes>
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
