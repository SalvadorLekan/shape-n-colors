import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { user: User | null } = { user: null };

const authSlice = createSlice({
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.user = { name: action.payload };
    },
    logout(state) {
      state.user = null;
    },
  },
  name: "auth-slice",
});

export default authSlice.reducer;

export const { login, logout } = authSlice.actions;
