import React from 'react';
import UserHoc from "../hoc/UserHoc";

// here user is not exorted defaultly but on a tricky way
const User = () => {
  return (
    <>
    <h1>User</h1>
    </>
  )
}

export default UserHoc(User,"I am anil")