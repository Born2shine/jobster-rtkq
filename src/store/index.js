import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import slugReducer from '../features/slugSlice'
import authReducer from '../features/authSlice'
import { authApi, jobsApi } from '../services'

export const store = configureStore({
    reducer: {
        [jobsApi.reducerPath]: jobsApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        slug: slugReducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jobsApi.middleware, authApi.middleware)
})

