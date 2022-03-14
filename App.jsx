import React from 'react';
import {BrowserRouter, Routes, Route, NavLink , Link} from "react-router-dom";
import { About } from './components/About';
import Contact from './components/Contact';
import HeaderBar from "./components/headerBar";
import Home from './components/Home';
import User from "./components/User"
const App = () => {
  return (
    <BrowserRouter>
    <HeaderBar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/user' element={<User/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App