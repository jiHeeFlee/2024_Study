import { createSlice } from '@reduxjs/toolkit';

const initialState={
    name:'',
}

const inputNameSlice=createSlice({
    name:'inputName',
    initialState,
    reducers:{
        input:(state,action)=>{
            state.name=action.payload;
        },
        sub:(state,action)=>{
            state.name=action.payload;
        },
    }
});

export const inputNameActions=inputNameSlice.actions;
export default inputNameSlice.reducer;