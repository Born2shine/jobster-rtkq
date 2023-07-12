import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getSessionStorageItem } from '../utils/helpers/storage';
import { BASE_URL } from '../constant/api';
import { logoutUser } from '../features/auth/authSlice';

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, {getState}) => {
        let token
        // const user = getSessionStorageItem('user')
        const user = getState().auth.user
        if (user) {
            token = user.token
            headers.set('authorization', `Bearer ${token ? token : ''}`)
        }
        return headers
    }
})

const baseQueryInterceptor =  async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.originalStatus === 403) {
        // send refresh token to getnew access token
        const refreshResult = await baseQuery('/refresh', api, extraOptions)
        if (refreshResult?.data) {
            const user = api.getState().auth.user
            // store the new token
            api.dispatch(setCredential({ ...refreshResult.data }))
            // retry the original query with the new access token
            result = await baseQuery(args, api, extraOptions)
        }else{
            api.dispatch(logoutUser())
        }
    }
    if (result?.error?.status === 401) {
        api.dispatch(logoutUser())
    }
    return result
}

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryInterceptor,
    endpoints: () => ({}),
})