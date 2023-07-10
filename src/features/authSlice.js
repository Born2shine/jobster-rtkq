import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Navigate, useNavigate } from "react-router-dom";
import {
  clearSessionStorage,
  getSessionStorageItem,
} from "../utils/helpers/storage";
import { flashMessage as flash } from "../utils/helpers/flashMessage";
import { useDispatch } from "react-redux";
import { toggleShowLogoutBtn } from "./slugSlice";


const user = getSessionStorageItem("user");
const initialState = {
  user: user ? user : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
	resetUser: (state) => initialState
    // logoutUser: () => {
    //   clearSessionStorage();
    //   dispatch(toggleShowLogoutBtn());
    //   flash("warning", "Logged out successfully");
    //   Navigate("/login");
    // },
  },
});

export const logoutUser = createAsyncThunk(
  "/user/logout",
  async (_, thunkAPI) => {
    try {
      clearSessionStorage();
      thunkAPI.dispatch(toggleShowLogoutBtn());
      thunkAPI.dispatch(resetUser());
      flash("warning", "Logged out successfully");
      Navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }
);

export const { setUser, resetUser } = authSlice.actions;
export default authSlice.reducer;
