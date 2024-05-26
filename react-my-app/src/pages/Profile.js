import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../redux/userSlice';

const Text=styled.p`
    color:blue;
    font-weight:700;
`;
const testForm=styled.form`
    font-weight: bold;
    color:green;
`;
const Profile=()=>{
    const user=useSelector((state)=>state.user.user);
    const [formData, setFormData]=useState({...user});
    const dispatch=useDispatch();

    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(updateUser(formData));
    };

    return(
        <>
            <Text>test Text - Profile</Text>
            <testForm onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                    placeholder='userName'
                />
                <input 
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='password'
                />
                <button type='submit'>
                    update
                </button>

            </testForm>
            <Link to={'/'}>
                Main 이동
            </Link>
        </>
    )
}

export default Profile