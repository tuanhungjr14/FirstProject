import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

//gia tri khoi tao
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
//.actions redux hieu cac funtion dc export la action cua redux
export const {setUserInfo, setUserTokens, removeUserInfo} = userSlice.actions;

export const selectUserInfo = state => state.data;

export const selectUserName = state => state.data?.name; // return null | name;

export const selectTokens = state => state.tokens;

export default userSlice.reducer;

//redux toolkit gop action,reducer,state vao 1 file la user slice
