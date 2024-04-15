import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  username: '',
  password: '',
  avatarUser: '',
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, action) {
      const {username, avatarUser, password} = action.payload;
      state.username = username;
      state.password = password;
      state.avatarUser = avatarUser;
    },
    updateToken(state, action) {
      state.token = action.payload.token;
    },
    clearUser() {
      return initialState;
    },
  },
});

export const {updateUser, updateToken, clearUser} = userSlice.actions;

export default userSlice.reducer;
