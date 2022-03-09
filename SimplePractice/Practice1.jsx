import React from 'react';
import { Context1, MyContext } from './Context1';
import Practice2 from './Practice2';
import Addplayer from './Addplayer';
import "./styling.css"

const Practice1 = () => {
  return (
    <Context1>
        <Practice2/>
        <Addplayer/>
    </Context1>
  )
}

export default Practice1