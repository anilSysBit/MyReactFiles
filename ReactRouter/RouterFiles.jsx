import React from 'react'
//we import the components of react router dom
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'

// importing the pages of websites and linking 
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"

// if you use the a herf tag then on every click the page reloads 
// for preventing this we have Link method on react router you can put your links inside the Link


/*
<Link to ={{
  pathname:"/path",
  hash:"#hashname",
  search:"?true=enabled"
}}
*/

const App = () => {
  return (
    <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App