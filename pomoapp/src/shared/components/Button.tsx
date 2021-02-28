import React, { useState } from 'react';

interface ButtonPropertys {
    color: string;
    children: string;
}

export default function Button(props: ButtonPropertys){
    const [counter, setCounter] = useState(1);

    function increment(){
        setCounter(counter + 1);
    }

    return (
        <button 
            type="button" 
            style={{ backgroundColor: props.color }}
            onClick={increment}
            >
            {props.children} <strong>{counter}</strong>
        </button>
    );
}