export type RecipeData = {
  name?: string | 'name';
  details?: string;
  ingredients?: string[];
};

export interface RecipeInitialState {
  status?: string | 'initial';
  data?: RecipeData;
}

export type RecipeSelector = {
  recipeReducer: RecipeInitialState;
};
