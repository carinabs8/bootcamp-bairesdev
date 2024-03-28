'use client';

import { createSlice } from '@reduxjs/toolkit';
import { RecipeInitialState } from '@/redux/types';

const initialState = {
  type: 'IDLE',
  data: {},
} as RecipeInitialState;


export const recipe = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    recipeData: (state, action) => ({
      ...state, ...action.payload,
    }),
  },
});

export const { recipeData } = recipe.actions;
export default recipe.reducer;