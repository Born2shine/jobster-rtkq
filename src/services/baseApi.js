import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
        prepareHeaders: (headers, {getState}) => {
            headers.set('authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGE5ZGUwZjM5MDNlZDk4OGZkNzgxZTkiLCJpYXQiOjE2ODg4NTQxNjMsImV4cCI6MTY4ODk0MDU2M30.3CdtltVr3ccJZ2-jmSnMSCuF5--aRI9lAFwyBrmVxmo`)
            return headers
        }
    }),
    endpoints: () => ({}),
})