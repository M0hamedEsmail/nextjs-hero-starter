import { Login } from '@/types/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Login = {
  email: '',
  password: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<User | null>) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    // You can add more actions like updateProfile here
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;