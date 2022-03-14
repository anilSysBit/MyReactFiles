import React from 'react';
import { Link } from 'react-router-dom';

const Contact = (props) => {
  console.log(props);
  return (
    <>
    <h1>Contacts</h1>
    <Link to={{
      pathname:"/about"
    }}>contact-to-about</Link>
    </>
  )
}

export default Contact