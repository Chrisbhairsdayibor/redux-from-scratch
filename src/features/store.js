import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import { productApi } from './APIslice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})

