"use client";
import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  isAuthenticated: boolean;
}

const initialState: UserState = {
  isAuthenticated: typeof window !== 'undefined' && localStorage.getItem('auth') === 'true',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state: { isAuthenticated: boolean; }) {
      state.isAuthenticated = true;
      if( typeof window !== 'undefined') {
        localStorage.setItem('auth', 'true');
      }
    },
    logout(state: { isAuthenticated: boolean; }) {
        state.isAuthenticated = false;
        if( typeof window !== 'undefined') {
          localStorage.removeItem('auth');
        }
      },
  },
});

export const { login , logout } = userSlice.actions;
export default userSlice.reducer;
