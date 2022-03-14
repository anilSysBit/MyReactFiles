import React from 'react';
import Authenc from "./Authenc"

const Container = (props) => {

    const style = {
        backgroundColor:"lightblue"
    }
  return (
      <Authenc>
          <div style={style}>
              {props.children}
          </div>
      </Authenc>
  )
}

export default Container