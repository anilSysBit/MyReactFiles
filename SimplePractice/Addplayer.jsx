import React from 'react'
import { useContext } from 'react';
import { MyContext } from './Context1';

const Addplayer = () => {
    const myContext = useContext(MyContext);

    const ListStyle = {
      position:"relative",
      display:"flex",
      margin:"10px",
      width:"100px"
    }
    const buttonCross = {
      position:"absolute",
      right:"0"
    }
  return (
    <>
    <ul>
        {myContext.state.playersName.map((item,index)=>{
            return(
                <span key={index} style={ListStyle}>
            <li key={index}>{item}</li>
            <button style={buttonCross} onClick={()=>{myContext.removePlayer(index)}}>x</button>
                </span>
            )})}
    </ul>
    </>
  )
}

export default React.memo(Addplayer);