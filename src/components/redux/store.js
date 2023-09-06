import {configureStore} from '@reduxjs/toolkit'
import booksReducer from './booksReducer'
import { pokemonApi } from './pokemon'
export const store = configureStore({
    reducer:{
        books:booksReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), pokemonApi.middleware]
})