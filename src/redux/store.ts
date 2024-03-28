import { configureStore, combineReducers } from '@reduxjs/toolkit';
import recipeReducer from './features/recipeSlice';

const rootReducer = combineReducers({
  recipeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppStore = ReturnType<typeof configureStore>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch;