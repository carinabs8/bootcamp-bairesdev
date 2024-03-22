import axios from "axios";
interface LocationState {
  pathname: string;
}

const headers = {
  headers: {Accept: "application/json", method: 'GET' },
};

export const fetchRecipe = (updateState: Function, useLocation: LocationState) => {
  updateState({type: 'FETCHING'});
  const path = useLocation?.pathname?.split('/')?.[2];
  const url = `/recipes/detail/${path}`
  axios.get(url, { ...headers, url: url }).then((response) => {
    const { data } = response;
    updateState({ type: 'FETCHED', ...response.data });
  }).catch((error) => {
    updateState({ type: 'API-ERROR', error: error });
  });
};
