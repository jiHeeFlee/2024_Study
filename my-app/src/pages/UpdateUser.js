import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../redux/userSlice';

const Container=styled.div`
  display: flex;
  flex-direction: column;

  flex-wrap: wrap;
  gap:1vw;
`;


const UpdateUser = () => {
  const user = useSelector((state) => state.user.user);
  const [formData, setFormData] = useState({
    part: user.part || '',
    introduction: user.introduction || '',
    userPhoto: user.userPhoto || '',
    current_password: '',
    new_password: ''
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ ...formData, memberId: user.memberId }));
  };

  return (
    <> 
      <Container>
        <form onSubmit={handleSubmit}>
          <input type="text" name="part" value={formData.part} onChange={handleChange} placeholder="Part" />
          <input type="text" name="introduction" value={formData.introduction} onChange={handleChange} placeholder="Introduction" />
          <input type="text" name="userPhoto" value={formData.userPhoto} onChange={handleChange} placeholder="User Photo URL" />
          <input type="password" name="current_password" value={formData.current_password} onChange={handleChange} placeholder="Current Password" />
          <input type="password" name="new_password" value={formData.new_password} onChange={handleChange} placeholder="New Password" />
          <button type="submit">Update</button>
        </form>
      </Container>
    </>
  );
};

export default UpdateUser;
