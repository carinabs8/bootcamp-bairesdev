import { configureStore } from '@reduxjs/toolkit'
import recipeReducer from './features/recipeSlice';

export const store = configureStore({
  reducer: { 
    recipeReducer
  },
});

export type AppStore = ReturnType<typeof store.getState>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch;