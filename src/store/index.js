import { configureStore } from '@reduxjs/toolkit'
import slugReducer from '../features/slugSlice'

export const store = configureStore({
    reducer: {
        'slug': slugReducer
    }
})

