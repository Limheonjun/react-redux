import React from 'react';
import AddNumber from '../components/AddNumber';
import store from '../store';

export default function WrapAddNumber(){
    return (
        <AddNumber onClick={(size)=>{
            store.dispatch({ type: 'INCREMENT', size: size });
        }}></AddNumber>
    );
}