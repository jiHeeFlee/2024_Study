import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Text=styled.p`
    color:blue;
    font-weight:700;
`;
const Curriculum=()=>{

    return(
        <>
            <Text>test Text - Curriculum</Text>
            <Link to={'/'}>
                Main 이동
            </Link>
        </>
    )
}

export default Curriculum