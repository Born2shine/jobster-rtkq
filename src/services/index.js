import { jobsApi, useGetAllJobsQuery, useAddJobMutation, useGetJobStatsQuery, useDeleteJobMutation } from "./job/jobsApi";
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
  useGetJobStatsQuery,
  useDeleteJobMutation
};
