import React from 'react'
import { useRef } from 'react'

const Authenc = (props) => {
    let password = "anilwagle808";
    if (password != "anilwagle808") {
        return (<h1>OOPs YOUR ARE NOT AUTHORIZED ON THIS PAGE</h1>)
    }
    else {
        return props.children
    }
}

export default Authenc