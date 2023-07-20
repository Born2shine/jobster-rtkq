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
        resetAddJob: (state) => initialState,
        setStats: (state, {payload}) => {
            state.stats = payload
        },
        setEditingJob: (state, {payload}) => {
            const { _id, position, company, jobLocation, status, jobType } = payload;

            state.isEditing = true
            state.editJobId = _id
            state.position = position
            state.company = company
            state.jobLocation = jobLocation
            state.status = status
            state.jobType = jobType
        }
    }
})

export const { resetAddJob, setStats, setEditingJob } = jobSlice.actions
export default jobSlice.reducer