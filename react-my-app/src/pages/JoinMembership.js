import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {useDispatch, useSelector} from 'react-redux';
import { signUp } from '../redux/userSlice';

const Text=styled.p`
    color:blue;
    font-weight:700;
`;

const JoinContainer=styled.form`
    display:flex;
    flex-direction:column;
`;
const JoinInput=styled.input`
    padding:10px;
`;

const JoinMembership=()=>{
    const [formData, setFormData]=useState({username:'',password:''});
    const dispatch=useDispatch();
    const user=useSelector((state)=>state.user);

    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(signUp(formData));
    };
    return(
        <>
            <Text>test Text - JoinMembership</Text>
            <Link to={'/'}>
                Main 이동
            </Link>
            <JoinContainer onSubmit={handleSubmit}>
                회원가입
                <br />
                이름
                <JoinInput 
                    type='text'
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                    placeholder='이름을 작성해주세요.'/>
                학번
                <JoinInput 
                    placeholder='학번을 작성해주세요.'/>
                ID
                <JoinInput 
                    placeholder='아이디를 작성해주세요.'/>
                PW
                <JoinInput 
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='비밀번호를 작성해주세요.'/>
                <button type='submit'>Sign up</button>
                {user.Status === 'loading'&& <p>Loading ...</p>}
                {user.Status === 'failed'&&<p>Error:{user.error}</p>}
            </JoinContainer>
        </>
    )
}

export default JoinMembership