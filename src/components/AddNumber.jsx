import React, { useState } from 'react';
import store from '../store';

function AddNumber() {
    const [size, setSize] = useState(0);

    return (
        <div>
            <h1>Add Number</h1>
            <input type="button" value="+" onClick={(e)=>{
                store.dispatch({type:'INCREMENT', size:size});
            }}></input>
            <input type="text" value={size} onChange={(e)=>{
                setSize(Number(e.target.value));
            }}></input>
        </div>
    );
}

export default AddNumber;