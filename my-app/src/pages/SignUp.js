import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../redux/userSlice';

const Container=styled.div`
  display: flex;
  flex-direction: column;

  flex-wrap: wrap;
  gap:1vw;
`;

const SignUp = () => {
  const [formData, setFormData] = useState({
    memberId: "",
    name: "",
    studentNumber: "",
    userPhoto: '',
    password1: "",
    password2: "",
    currentPosition: "",
    year: 0,
    introduction: "",
    part: ""
  });
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(formData));
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <input type="text" name="memberId" value={formData.memberId} onChange={handleChange} placeholder="Member ID" />
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
          <input type="text" name="studentNumber" value={formData.studentNumber} onChange={handleChange} placeholder="Student Number" />
          <input type="text" name="userPhoto" value={formData.userPhoto} onChange={handleChange} placeholder="User Photo URL" />
          <input type="password" name="password1" value={formData.password1} onChange={handleChange} placeholder="Password" />
          <input type="password" name="password2" value={formData.password2} onChange={handleChange} placeholder="Confirm Password" />
          <input type="text" name="currentPosition" value={formData.currentPosition} onChange={handleChange} placeholder="Current Position" />
          <input type="number" name="year" value={formData.year} onChange={handleChange} placeholder="Year" />
          <input type="text" name="introduction" value={formData.introduction} onChange={handleChange} placeholder="Introduction" />
          <input type="text" name="part" value={formData.part} onChange={handleChange} placeholder="Part" />
          <button type="submit">Sign Up</button>
          {user.status === 'loading' && <p>Loading...</p>}
          {user.status === 'failed' && <p>Error: {user.error}</p>}
        </form>
      </Container>
    </>
  );
};

export default SignUp;
