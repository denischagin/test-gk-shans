import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux'

const rootReducer = combineReducers({})

export const store = configureStore({
  reducer: rootReducer,
  //   middleware: getDefaultMiddleware =>
  // getDefaultMiddleware().concat(baseApi.middleware, modeStorageMiddlware.middleware),
})

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
