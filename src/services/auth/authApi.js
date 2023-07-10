import { baseApi } from "../baseApi";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        reducerPath: 'authAPI',
        registerUser: builder.mutation({
            query: (user) => ({
                url: `/auth/register`,
                method: 'POST',
                body: user
            })
        }),
        login: builder.mutation({
            query: (user) => ({
                url: `/auth/login`,
                method: 'POST',
                body: user
            })
        })
    })
})

export const { useRegisterUserMutation, useLoginMutation} = authApi