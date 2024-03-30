import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../features/counter/counterSlice"
import todolistReducer from '../features/todolist/todolistSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { countriesApi } from '../services/countriesApi'
export const store = configureStore({
  reducer: {
    c:counterReducer,
    t:todolistReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(countriesApi.middleware),
})
setupListeners(store.dispatch)