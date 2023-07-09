import { baseApi } from "../baseApi";

export const jobsApi = baseApi.injectEndpoints({
    reducerPath: 'jobsAPI',
    endpoints: (builder) => ({
        getAllJobs: builder.query({
            query: ({ status, jobType, sort, page }) => `/jobs?status=${status}&jobType=${jobType}&sort=${sort}&page=${page}`
        })
    }),
    // overrideExisting: false,
})

export const { useGetAllJobsQuery } = jobsApi