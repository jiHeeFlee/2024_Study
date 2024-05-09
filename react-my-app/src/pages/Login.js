import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import {login} from '../redux/userThunks';

const Text=styled.p`
    color:blue;
    font-weight:700;
`;

const LoginContainer=styled.div`
    display:flex;
    flex-direction:column;
`;
const LoginInput=styled.input`
    padding: 10px;
`;

const Login=()=>{
    const dispatch=useDispatch();
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const handleLogin=()=>{
        dispatch(Login({username,password}));
    };

    return(
        <>
            <Text>test Text - Login</Text>
            <Link to={'/'}>
                Main 이동
            </Link>
            <LoginContainer>
                ID{' '}
                <LoginInput 
                placeholder='아이디를 입력해주세요.'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />
                PW{' '}
                <LoginInput
                type='password'
                placeholder='비밀번호를 입력해주세요.'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </LoginContainer>
            
        </>
    )
}

export default Login