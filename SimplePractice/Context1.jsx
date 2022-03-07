import React, { Component, createContext } from 'react'

const MyContext = createContext();
class Context1 extends Component {
    constructor(props){
        super(props);

        this.state = {
            status:false,
            playersName:[],
            result:""
        }
    }

    addPlayerOnStateHandler =(newName)=>{
        this.setState((prevState,props)=>({
            playersName:[...prevState.playersName,newName]
        }))
    }
  render() {
    return (
      <MyContext.Provider value={{
          state:this.state,
          addPlayer:this.addPlayerOnStateHandler
      }}>
          {this.props.children}
      </MyContext.Provider>
    )
  }
}

export {MyContext,Context1}