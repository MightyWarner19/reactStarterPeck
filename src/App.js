// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import jobData from './data.json';
import JobCategory from './Components/JobCategory';
import JobDetail from './Components/JobDetail';
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer';
import Signup from './Components/Signup';
import LoginForm from './Components/Login';

function App() {
  return (
    <>
    <Navbar />
     
      {/* <Signup /> */}
      <LoginForm />
      <Footer />
    </>
  );
}

export default App;
