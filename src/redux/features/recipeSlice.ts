"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type RecipeData = {
  name: string;
  details: string;
  ingredients: [];
}

interface InitialState {
  status: string;
  data?: RecipeData;
}

const initialState = {
  status: 'initial',
  data: {},
} as InitialState;


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