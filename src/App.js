import React from "react";
import Home from './components/Home';
import Login from './components/Login';
import Speech from './components/Speech';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/speech" element={<Speech/>}/>
      </Routes>
    </BrowserRouter>

  )
}
export default App;
