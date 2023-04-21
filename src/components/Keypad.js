// Code Keypad Component Here
import React from "react";

function Keypad (){
    function handleChange(){
        console.log('Entering password...')
    }
    return (
        <input type ="password" onchange={handleChange}/>
    )
}

export default Keypad;