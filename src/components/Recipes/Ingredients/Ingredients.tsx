import React, { useEffect, useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { recipeSelector } from '@/redux/selectors';
import styled from 'styled-components';

const RecipeDetailWrapper = styled.section`
  padding: 0 4px 4px;
`;

const IngredientsListWrapper = styled.ul`
  padding: 4px;
`;

export const Ingredients = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isCalledRef = React.useRef(false);
  const { type, data } = useSelector(recipeSelector, shallowEqual);
  const recipeData = data || {};

  if(!Object?.entries(recipeData)?.length) return null;

  return (
    <React.Fragment>
      <IngredientsListWrapper className={'summary'}>
        {recipeData?.ingredients?.map((ingredient: string, index: number) => {
          return(<li className={'summary'} key={`ingredient_${index}`}>{ingredient}</li>);
        })}
      </IngredientsListWrapper>
      <h1 className={'mb-3 text-2xl font-semibold'}>Description</h1>
      <RecipeDetailWrapper className={'prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-600 hover:prose-a:text-indigo-500'}>
        {recipeData?.details}
      </RecipeDetailWrapper>
    </React.Fragment>
  );
};

export default Ingredients;