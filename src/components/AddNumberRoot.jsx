import React from 'react';
import AddNumber from './AddNumber'

function AddNumberRoot(props) {
    return (
        <div>
            <h1>Add Number Root</h1>
            <AddNumber setNumber={props.setNumber}></AddNumber>
        </div>
    );
}

export default AddNumberRoot;