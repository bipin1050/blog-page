import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import BlogDetails from './components/BlogDetails';
import Headers from './components/Headers';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Headers />
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/blogs' element={<HomePage />}/>
      <Route path='/blogs/:id' element={<BlogDetails />}/>
    </Routes>
    <Footer />
    </>
    
  );
}

export default App;
