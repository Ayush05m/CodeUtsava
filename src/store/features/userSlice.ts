import { createSlice } from "@reduxjs/toolkit";
// import { string } from "zod";

export const userSlice = createSlice({
  name: "User",
  initialState: {
    user: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.userId;
    },
    removeUser: (state) => {
      state.user = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
