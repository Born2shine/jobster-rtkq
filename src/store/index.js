import { configureStore } from '@reduxjs/toolkit'
import slugReducer from '../features/slug/slugSlice'
import authReducer from '../features/auth/authSlice'
import JobReducer from '../features/jobs/jobSlice'
import { authApi, jobsApi } from '../services'

export const store = configureStore({
    reducer: {
        [jobsApi.reducerPath]: jobsApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        slug: slugReducer,
        auth: authReducer,
        job: JobReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jobsApi.middleware, authApi.middleware),
    devTools: true
})

