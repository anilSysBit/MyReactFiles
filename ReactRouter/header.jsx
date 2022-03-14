import React from 'react';
import { NavLink } from 'react-router-dom';

const Header= () => {
  return (
    <div className="navigationBar">
        <ul>
            <li>
                <NavLink></NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Header;