import { createSlice } from "@reduxjs/toolkit";
// import { string } from "zod";
interface UserState {
  user: string;
}

const initialState: UserState = {
  user: "",
};
export const userSlice = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
