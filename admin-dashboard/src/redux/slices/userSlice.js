import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    userAction(state, { payload }) {
      state.users = payload;
    },
  },
});

export const { userAction } = userSlice.actions;

export default userSlice.reducer;

// Selector

export const usersSelector = (state) => state.entities.user;
