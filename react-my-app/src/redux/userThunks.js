import { ReducerType, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

export const login=createAsyncThunk(
    'user/login',
    async({username,password},{rejectWithValue})=>{
        try{
            const response=await axios.post('/login',{username,password});
            return response.data;
        }catch(error){
            return rejectWithValue(error.response.data);
        }
    });