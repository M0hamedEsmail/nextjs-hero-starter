import { AuthState, User } from '@/types/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Initial state with proper typing
const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

// Auth slice with login and logout actions
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Login action - sets user and authentication status
    login(state, action: PayloadAction<User>) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    // Logout action - clears user and authentication status
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;