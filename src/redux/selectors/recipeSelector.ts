import { RecipeSelector } from '@/redux/types';

export const recipeSelector = (state: RecipeSelector) => (state?.recipeReducer);
