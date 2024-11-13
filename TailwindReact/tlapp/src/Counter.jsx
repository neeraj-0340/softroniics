import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Counterslice';

const Counter = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.counter.count); 

    return (
        <div>
            <div>{data}</div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;