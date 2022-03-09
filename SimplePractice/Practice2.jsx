import React from 'react';
import { useContext,useRef, useEffect ,useState} from 'react';
import { Context1, MyContext } from './Context1';
import Toaster from './Toaster';

const Practice2 = () => {

    const [error,setError] = useState("");

    
    const myRef = useRef();
    const myContext = useContext(MyContext);

    console.log(myContext);

    
    const InitPlayerHandler = (e) =>{
        e.preventDefault();
        let inputText = myRef.current.value;
        let x = checkValidation(inputText);
        myContext.toasterState(false);
        console.log(x);
        if(x){
            myContext.addPlayer(inputText);
            // myContext.state.showToaster = true;
            alert("you have registerd a player");
            myContext.toasterState(true);

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

    const inputSelectHandler =()=>{
        myContext.toasterState(false);
    }
  return (
    <>
    <div className="container">
        <h1>Form Add players</h1>
        <form action="submit" onSubmit={InitPlayerHandler}>
            <input type="text" ref={myRef} onKeyPress={inputSelectHandler}/>
            <button>Submit</button>
            </form>
            {myContext.state.status ? null : <ErrorFolder/>}
        </div>
        <Toaster/>
    </>
  )
}


export default React.memo(Practice2);