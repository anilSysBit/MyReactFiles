import React, { Component, createContext } from 'react'

const MyContext = createContext();
class Context1 extends Component {
    constructor(props){
        super(props);

        this.state = {
            status:false,
            playersName:[],
            result:"",
            showToaster:false,
            toastTerInterval:false
        }
    }

    addPlayerOnStateHandler =(newName)=>{
        this.setState((prevState,props)=>({
            playersName:[...prevState.playersName,newName]
        }))
    }

    removePlayerHandler = (idx) =>{
        let removedPlayer = this.state.playersName;
        removedPlayer.splice(idx,1)
        this.setState({playersName:removedPlayer})
    }

    toasterState = (value) =>{
        this.setState({
            showToaster:value
        })
    }

    toasterInterval = (value) =>{
        this.setState({
            toastTerInterval:value
        })
    }
  render() {
    return (
      <MyContext.Provider value={{
          state:this.state,
          addPlayer:this.addPlayerOnStateHandler,
          removePlayer: this.removePlayerHandler,
          toasterState : this.toasterState,
          toasterInterval: this.toasterInterval
      }}>
          {this.props.children}
      </MyContext.Provider>
    )
  }
}

export {MyContext,Context1}