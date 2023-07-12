import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Navigate, useNavigate } from "react-router-dom";
import {
  clearSessionStorage,
  getSessionStorageItem,
} from "../../utils/helpers/storage";
import { flashMessage as flash } from "../../utils/helpers/flashMessage";
import { useDispatch } from "react-redux";
import { toggleShowLogoutBtn } from "../slug/slugSlice";


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
    logoutUser: (state) => {
      state.user = null,
      clearSessionStorage();
    },
    resetUser: (state) => initialState,
  },
});

export const { setUser, resetUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
