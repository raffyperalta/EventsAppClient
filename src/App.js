import React, { useState } from 'react';
import './App.css';
import LoginForm from './pages/LoginForm'
import Dashboard from './pages/Dashboard'
import Tag from './pages/Tag'

// import React , { useState} from 'react'
import { BrowserRouter as Router, Routes, Switch, Route, BrowserRouter} from 'react-router-dom';
import RegisterForm from './pages/RegisterForm';

function App() {
  const Login = details => {
    console.log(details)
  }

  const Logout = details => {
    console.log("Logout")
  }

  return (  
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/" element={<LoginForm/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>

    </div>
    // <div className="App">
    //   <Tag  />
    // </div> 
  );
}


export default App;
