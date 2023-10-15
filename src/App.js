import './App.css';
import React from 'react';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Homescreen from './Pages/Homescreen/index';
import Products from './Pages/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homescreen />
      <Products />
    </div>
  );
}

export default App;
