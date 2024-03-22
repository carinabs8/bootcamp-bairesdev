export type RecipeData = {
  name?: string | 'name';
  details?: string;
  ingredients?: string[];
};

export interface RecipeInitialState {
  type?: string | 'initial';
  data?: RecipeData;
}

export type RecipeSelector = {
  recipeReducer: RecipeInitialState;
};
