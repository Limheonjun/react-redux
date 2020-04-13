import React, { useState } from 'react';
import store from '../store';
import DisplayNumber from '../components/DisplayNumber';

export default function WrapDisplayNumber(){
    const [number, setNumber] = useState(store.getState().number);
    store.subscribe(() => {
        setNumber(store.getState().number);
    });

    return (
        <DisplayNumber number={number}></DisplayNumber>
    );
}