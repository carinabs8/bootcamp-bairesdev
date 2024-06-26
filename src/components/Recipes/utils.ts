import axios from 'axios';
interface LocationState {
  pathname: string;
}

const headers = {
  headers: {Accept: 'application/json', method: 'GET' },
};

type FetchRecipeParams = {
  updateState: () => void;
  useLocation: LocationState;
}

export const fetchRecipe = (params: FetchRecipeParams) => {
  const { updateState, useLocation } = params;
  updateState({type: 'FETCHING'});
  const path = useLocation?.pathname?.split('/')?.[2];
  const url = `/recipes/detail/${path}`;
  axios.get(url, { ...headers, url: url }).then((response) => {
    const { data } = response;
    updateState({ type: 'FETCHED', ...data });
  }).catch((error) => {
    updateState({ type: 'API-ERROR', error: error });
  });
};
