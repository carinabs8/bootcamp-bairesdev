"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecipeData, RecipeInitialState } from '@/redux/types';

const initialState = {
  status: 'initial',
  data: {},
} as RecipeInitialState;


export const recipe = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    fetching: () => ({status: 'fetching'}),
    fetched: (state, action) => ({
      ...action?.payload,
      status: 'fetched'
    })
  },
});

export const { fetching,  fetched } = recipe.actions;
export default recipe.reducer;