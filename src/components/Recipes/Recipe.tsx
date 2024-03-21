import React, { useEffect, useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store';
import { recipeSelector } from '@/redux/selectors';
import { fetchRecipe } from './utils';
import Ingredients from './Ingredients';
import styled from 'styled-components';

const RecipeWrapper = styled.section`
  li {
    list-style: circle;
  }
`;

export const Recipe = ( props ) => {
  const dispatch = useDispatch<AppDispatch>();
  const isCalledRef = React.useRef(false);
  const { status, data } = useSelector(recipeSelector, shallowEqual);

  const getRecipe = useCallback(() => {
    isCalledRef.current = true;
    fetchRecipe(dispatch, location);
  }, []);

  useEffect(() => {
    if (!isCalledRef.current) {
      getRecipe();
    }
  }, [fetchRecipe]);

  return (
    <RecipeWrapper>
      <h1 className={`mb-3 text-2xl font-semibold`}>{data?.name} - {status}</h1>
      <Ingredients/>
    </RecipeWrapper>
  )
}

export default Recipe;