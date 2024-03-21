import axios from "axios";
import { fetching, fetched } from '@/redux/features/recipeSlice';
import { AppDispatch } from '@/redux/store';

const headers = {
  headers: {Accept: "application/json", method: 'GET' },
};

export const fetchRecipe = (dispatch: AppDispatch, useLocation) => {
  dispatch?.(fetching());
  const path = useLocation?.pathname?.split('/')?.[2];
  const url = `/recipes/detail/${path}`
  axios({ ...headers, url: url }).then((response) => {
    dispatch?.(fetched(response?.data));
  }).catch(function(error) {
    dispatch?.(fetched({
      details: error,
    })) 
  });
};
