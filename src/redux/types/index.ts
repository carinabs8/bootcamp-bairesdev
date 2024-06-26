export type RecipeData = {
  name?: string | 'name';
  details?: string;
  ingredients?: string[];
};

export interface RecipeInitialState {
  type?: string | 'initial';
  data?: RecipeData;
  error?: object;
}

export type RecipeSelector = {
  recipeReducer: RecipeInitialState;
};
