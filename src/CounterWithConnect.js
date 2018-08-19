import React from 'react';
import { increment, decrement } from './store';
import connect from './connect';

export function CounterWithConnect({ n, dispatch }) {

    const inc = () => dispatch(increment);
    const dec = () => dispatch(decrement);

    return (
        <div>
            <button onClick={inc}> + </button>
            <h2>{n}</h2>
            <button onClick={dec}> - </button>
        </div>
    )
}

export default connect(state => state)(CounterWithConnect);