import React from 'react';
import { useContext,useRef, useEffect } from 'react';
import { MyContext } from './Context1';

const Practice2 = () => {
    const myRef = useRef();
    const myContext = useContext(MyContext);

    console.log(myContext);

    
    const InitPlayerHandler = (e) =>{
        e.preventDefault();
        let inputText = myRef.current.value;
        let x = checkValidation(inputText);
        console.log(x);
        if(x){
            myContext.addPlayer(inputText)
        }

    }
    const checkValidation =(inputText)=>{
        if(inputText === ""){
            return false;
        }
        else if(inputText.length <= 2){
            return false;
        }
        return true;
    }
  return (
    <>
    <div className="container">
        <h1>Form Add players</h1>
        <form action="submit" onSubmit={InitPlayerHandler}>
            <input type="text" ref={myRef} />
            <button>Submit</button>
            </form>
        </div>
    </>
  )
}

export default Practice2