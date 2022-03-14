import React from 'react';
import { NavLink , Link} from 'react-router-dom';
import "../SASS/RouterPractice.css"

const HeaderBar = () => {
  return (
    <>
    <div className="navigationBar">
      <nav>
        <NavLink to="/" className="m-4 navb">Home</NavLink>
        <NavLink to="/about" className="m-4 navb">About</NavLink>
        <NavLink to="/contact" className="m-4 navb">Contact</NavLink>
        <NavLink to="/user" className="m-4 navb">User</NavLink>
      </nav>
    </div>
    </>
  )
}

export default HeaderBar