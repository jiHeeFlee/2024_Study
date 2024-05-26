import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 초기 상태
const initialState={
    user:null,
    status:'idle',
    error:null
};

// 비동기 회원 가입 작업
export const signUp=createAsyncThunk(
    'user/signUp',
    async (userData)=>{
        const response = await fetch('/members/join/',{
            method:'POST',
            header:{
                'Content-Type' : 'application/json',
            },
        });
        if (!response.ok){
            throw new Error('Test Nextwork response was not ok');
        }
        return response.json();
    }
);

//비동기 회원 정보 수정 작업
export const updateUser=createAsyncThunk(
    'user/updateUser',
    async (userData)=>{
        const response=await fetch('/members/update/${userData.id}',{
            method:'PUT',
            headers:{
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify(userData),
        });
        if(!response.ok){
            throw new Error('test updateUserData Network response was not ok');
        }
        return response.json();
    }
);

// Slice 생성
const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(signUp.pending, (state)=>{
                state.status='loading';
            })
            .addCase(signUp.fulfilled, (state, action)=>{
                state.status='succeeded';
                state.user=action.payload;
            })
            .addCase(signUp.rejected, (state, action)=>{
                state.status='failed';
                state.error=action.error.message;
            })
            .addCase(updateUser.pending, (state)=>{
                state.status='loading';
            })
            .addCase(updateUser.fulfilled, (state, action)=>{
                state.status='succeeded';
                state.user=action.payload;
            })
            .addCase(updateUser.rejected, (state, action)=>{
                state.status='failed';
                state.error=action.error.message;
            });
    },
});

export default userSlice.reducer;