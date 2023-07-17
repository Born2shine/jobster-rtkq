import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = {
	search: '',
	searchStatus: 'all',
	searchType: 'all',
	sort: 'latest',
	sortOptions: ['latest', 'oldest', 'a-z', 'z-a']
}

const initialState = {
	jobs: [],
	totalJobs: 0,
	numberOfPages: 1,
	page: 1,
	stats: {},
	monthlyApplications: {},
	...initialFilterState
}

const allJobsSlice = createSlice({
	name: "alljobs",
	initialState
})

export default allJobsSlice.reducer