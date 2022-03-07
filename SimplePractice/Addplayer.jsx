import React from 'react'
import { useContext } from 'react';
import { MyContext } from './Context1';

const Addplayer = () => {
    const myContext = useContext(MyContext);
  return (
    <>
    <ul>
        {myContext.state.playersName.map((item,index)=>{
            return(
                <span key={index}>
            <li key={index}>{item}</li>
                </span>
            )})}
    </ul>
    </>
  )
}

export default Addplayer