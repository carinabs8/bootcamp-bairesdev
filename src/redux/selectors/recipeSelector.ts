import { RecipeSelector, RecipeInitialState } from '@/redux/types';

export const recipeSelector = (state: RecipeSelector) => {
  return state?.recipeReducer;
};