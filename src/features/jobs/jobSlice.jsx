import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    position: "",
    company: "",
    jobLocation: "",
    status: "pending",
    statusOptions: ['interview', 'declined', 'pending'],
    jobType: "full-time",
    jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
    isEditing: false,
    editJobId: ''
}

export const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        resetAddJob: (state) => {

        }
    }
})

export const { resetAddJob } = jobSlice.actions
export default jobSlice.reducer