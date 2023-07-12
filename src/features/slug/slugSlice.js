import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    showSidebar: true,
    showLogoutBtn: false,
}

const slugSlice = createSlice({
    name: 'slug',
    initialState,
    reducers: {
        toggleNavbar: (state) => {
            state.showSidebar = !state.showSidebar
        },
        toggleShowLogoutBtn: (state) => {
            state.showLogoutBtn = !state.showLogoutBtn
        },
    }
})

export const { toggleNavbar, toggleShowLogoutBtn } = slugSlice.actions
export default slugSlice.reducer