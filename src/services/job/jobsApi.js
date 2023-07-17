import { baseApi } from "../baseApi";

export const jobsApi = baseApi.injectEndpoints({
  reducerPath: "jobsAPI",
  tagTypes: ["job"],
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: () =>
        `/jobs`,
        providesTags: ['job']
    }),   
    addJob: builder.mutation({
      query: (job) => ({
        url: '/jobs',
        method: 'POST',
        body: job
      }),
      invalidatesTags: ['job']
    }),
    getJobStats: builder.query({
      query: () =>
        `/jobs/stats`,
        providesTags: ['job']
    }),
    getJobsBySlug: builder.query({
      query: ({ status, jobType, sort, page }) =>
        `/jobs?status=${status}&jobType=${jobType}&sort=${sort}&page=${page}`,
        providesTags: ['job']
    }),
  }),
  // overrideExisting: false,
});

export const { useGetAllJobsQuery, useAddJobMutation, useGetJobStatsQuery, useGetJobsBySlugQuery } = jobsApi;
