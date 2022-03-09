import React, { useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "./Context1";
import { useState } from "react";

const Toaster = () => {

    const myContext = useContext(MyContext);

    const removeSucessToaster = () =>{
        myContext.toasterState(false);
        myContext.toasterInterval(false);
        alert("Press ok if you got the submitted message");
    }


    return(
        <>
        <div className="ToasterContainer" style={{display: myContext.state.showToaster ? "block":"none"}}>
            <div className="toasterMain">
                <span className="tickSucessIcon">&#128505;</span>
                <p>SucessFully Submitted</p>
                <span className="crossSucessIcon" onClick={removeSucessToaster}>&#128502;</span>
                </div>
            </div>
        </>
    )
}

export default Toaster;