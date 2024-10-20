import React from 'react';
import './Sunglass.css'
import Watch from '../Watch/Watch';
import { add } from '../../Utilites/calc';

const Sunglass = () => {
    const number1 = 44;
    const number2 = 122;
    const sum = add(number1 , number2)
    console.log(sum);

    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;