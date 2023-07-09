import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import slugReducer from '../features/slugSlice'
import { jobsApi } from '../services/jobsApi'

export const store = configureStore({
    reducer: {
        [jobsApi.reducerPath]: jobsApi.reducer,
        slug: slugReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jobsApi.middleware)
})

