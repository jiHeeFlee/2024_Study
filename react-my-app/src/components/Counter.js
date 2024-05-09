import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { counterActions } from '../redux/counterSlice';

function Counter(){
    const counter=useSelector(state=>state.counter.counter);
    const dispatch=useDispatch();

    const addHandler=()=>{
        dispatch(counterActions.add(10));
    };

    const subHandler=()=>{
        dispatch(counterActions.sub(10));
    };

    return(
        <>
            <div>
                <h2>{counter}</h2>
                <div>
                    <button onClick={addHandler}>+</button>
                    <button onClick={subHandler}>-</button>
                    {/* <input onClick={inputName} placeholder='이름을 입력해주세요' />
                    <button onClick={subName}>-이름</button> */}
                </div>
            </div>
        </>
    )
};

export default Counter;