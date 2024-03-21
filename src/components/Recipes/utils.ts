import axios from "axios";
import { fetching, fetched } from '@/redux/features/recipeSlice';
import { AppDispatch } from '@/redux/store';

interface LocationState {
  pathname: string;
}

const headers = {
  headers: {Accept: "application/json", method: 'GET' },
};

export const fetchRecipe = (dispatch: AppDispatch, useLocation: LocationState) => {
  dispatch?.(fetching());
  const path = useLocation?.pathname?.split('/')?.[2];
  const url = `/recipes/detail/${path}`
  axios.get(url, { ...headers, url: url }).then((response) => {
    dispatch?.(fetched(response?.data));
  }).catch((error) => {
    dispatch?.(fetched({
      details: error,
    })) 
  });
};
