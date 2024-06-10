import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 백엔드 서버 URL
const SERVER_URL = 'https://likelionteam5.pythonanywhere.com';

// 초기 상태
const initialState = {
  user: {
    memberId: "",
    name: "",
    studentNumber: "",
    // userPhoto: '',
    password1: "",
    password2: "",
    currentPosition: "",
    year: 0,
    introduction: "",
    part: ""
  },
  status: 'idle',
  error: null,
};

// 비동기 회원가입 작업
export const signUp = createAsyncThunk(
  'user/signUp',
  async (userData) => {
    const response = await fetch(`${SERVER_URL}/members/join/`, {
      method: 'POST',
      // credentials: "include",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error('JoinMembership - Network response was not ok');
    }
    return response.json();
  }
);

// 비동기 회원 정보 수정 작업
export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (userData) => {
    const response = await fetch(`${SERVER_URL}/members/update/`, {
      method: 'PUT',
      // credentials: "include",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error('Profile - Network response was not ok');
    }
    return response.json();
  }
);

// Slice 생성
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.status = 'loading';
        console.log('loading');
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        console.log('succeeded');
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        console.log('failed');
      })
      .addCase(updateUser.pending, (state) => {
        state.status = 'loading';
        console.log('loading');
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        console.log('succeeded');
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        console.log('failed');
      });
  },
});

export default userSlice.reducer;
