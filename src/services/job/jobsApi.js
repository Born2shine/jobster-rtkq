import { baseApi } from "../baseApi";

export const jobsApi = baseApi.injectEndpoints({
  reducerPath: "jobsAPI",
  tagTypes: ["job"],
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: ({ status, jobType, sort, page }) =>
        `/jobs?status=${status}&jobType=${jobType}&sort=${sort}&page=${page}`,
        invalidatesTags: ['job']
    }),
  }),
  // overrideExisting: false,
});

export const { useGetAllJobsQuery } = jobsApi;
