import { createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";
import { getSessionStorageItem } from "../utils/helpers/storage";

const user = getSessionStorageItem('user')
const initialState = {
	user: user ? user : null
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, { payload }) => {
			state.user = payload
		}
	}
})

export const { setUser } = authSlice.actions
export default authSlice.reducer