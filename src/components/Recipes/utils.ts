import axios from "axios";
import { fetch } from '@/redux/features/recipeSlice';
import { AppDispatch } from '@/redux/store';

interface LocationState {
  pathname: string;
}

const headers = {
  headers: {Accept: "application/json", method: 'GET' },
};

export const fetchRecipe = (dispatch: AppDispatch, useLocation: LocationState) => {
  dispatch?.(fetch({type: 'FETCHING'}));
  const path = useLocation?.pathname?.split('/')?.[2];
  const url = `/recipes/detail/${path}`
  axios.get(url, { ...headers, url: url }).then((response) => {
    const { data } = response;
    dispatch?.(fetch({type: 'FETCHED', ...response.data }));
  }).catch((error) => {
    dispatch?.(fetch({
      type: 'API-ERROR',
      error: error,
    })) 
  });
};
