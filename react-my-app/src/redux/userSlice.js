import { createSlice } from '@reduxjs/toolkit';

export const userSlice=createSlice({
    name:'user',
    initialState:{
        isLoggedIn:false,
        user:null,
        error:null,
    },
    reducers:{
        loginSucess:(state,action)=>{
            state.isLoggedIn=true;
            state.user=action.payload;
            state.error=null;
        },
        loginFailure:(state,action)=>{
            state.isLoggedIn=false;
            state.user=null;
            state.error=action.payload;
        },
    },

});

export const {loginSucess,loginFailure}=userSlice.actions;
export default userSlice.reducer;