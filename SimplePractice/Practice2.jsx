import React from 'react';
import { useContext,useRef, useEffect ,useState} from 'react';
import { Context1, MyContext } from './Context1';

const Practice2 = () => {

    const [error,setError] = useState("");

    
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

        myRef.current.value = "";
    }
    const checkValidation =(inputText)=>{
        if(inputText === ""){
            setError("No written yet");
            myContext.state.status = false;
            return false;
        }
        else if(inputText.length <= 2){
            setError("Word less than 3 word");
            myContext.state.status = false;
            return false;
        }
        myContext.state.status = true;
        return true;
        
    }

    const ErrorFolder =()=>{
        return(
            <>
            <div className="errorContainer">
                <h1>{error}</h1>
                </div>
            </>
        )
    }

  return (
    <>
    <div className="container">
        <h1>Form Add players</h1>
        <form action="submit" onSubmit={InitPlayerHandler}>
            <input type="text" ref={myRef} />
            <button>Submit</button>
            </form>
            {myContext.state.status ? null : <ErrorFolder/>}
        </div>
    </>
  )
}


export default React.memo(Practice2);