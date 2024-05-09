import React,{useState} from "react";
import styled from "styled-components";

const Container=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const NumberCounter=()=>{
    console.log('마운트 냠냐링')
    const [number,setNumber]=useState(0);
    const onIncrease=()=>{
        setNumber(number+1);
        console.log('hi! add 1');
    }
    const onDecrease=()=>{
        setNumber(number-1);
        console.log('hi!')
    }
    return(
        <>
        <Container>
            <h1>{number}</h1>
            <div style={{display:'flex',flexDirection:'row'}}>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </Container>
        </>
    )
};


export default NumberCounter;