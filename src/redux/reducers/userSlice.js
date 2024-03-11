// userSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk('user/login', async () => {
  try {
    const response = await fetch(
      'https://api-phenet.phenikaa-x.com/v1/auth/login-social',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Nguyen Tuan Hung',
          email: 'hung@gmail.com',
          socialID: '1234567890abcdef',
          socialType: 'google',
        }),
      },
    );

    const data = await response.json();
    console.log('Login success:', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
});

const initialState = {
  data: null,
  tokens: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.data = action.payload;
    },
    setUserTokens: (state, action) => {
      state.tokens = action.payload;
    },
    removeUserInfo: (state, action) => {
      state.data = null;
      state.tokens = null;
    },
  },
});

export const {setUserInfo, setUserTokens, removeUserInfo} = userSlice.actions;

export const selectUserInfo = state => state.data;

export const selectUserName = state => state.data?.name; // return null | name;

export const selectTokens = state => state.tokens;

export default userSlice.reducer;
