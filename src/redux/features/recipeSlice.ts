"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecipeInitialState } from '@/redux/types';

const initialState = {
  type: 'IDLE',
  data: {},
} as RecipeInitialState;


export const recipe = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    fetch: (state, action) => ({
      ...state, ...action.payload,
    }),
  },
});

export const { fetch } = recipe.actions;
export default recipe.reducer;