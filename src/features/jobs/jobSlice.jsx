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
    editJobId: '',
    stats: null
}

export const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        resetAddJob: (state) => {},
        setStats: (state, {payload}) => {
            state.stats = payload
        },
    }
})

export const { resetAddJob, setStats } = jobSlice.actions
export default jobSlice.reducer