import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getSessionStorageItem } from '../utils/helpers/storage';
import { BASE_URL } from '../constant/api';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers, {getState}) => {
            let token
            const user = getSessionStorageItem('user')
            if (user) {
                token = user.user.token
            }
            headers.set('authorization', `Bearer ${token ? token : ''}`)
            return headers
        }
    }),
    endpoints: () => ({}),
})