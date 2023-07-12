import { jobsApi, useGetAllJobsQuery, useAddJobMutation, useGetJobStatsQuery } from "./job/jobsApi";
import {
  authApi,
  useRegisterUserMutation,
  useLoginMutation,
  useUpdateProfileMutation,
} from "./auth/authApi";

export {
  jobsApi,
  useGetAllJobsQuery,
  authApi,
  useRegisterUserMutation,
  useLoginMutation,
  useUpdateProfileMutation,
  useAddJobMutation,
  useGetJobStatsQuery
};
