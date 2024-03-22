import { fetchRecipe } from './utils';
import { fetch } from '@/redux/features/recipeSlice';
import { AppDispatch } from '@/redux/store';
import axios from "axios";

import { act } from '@testing-library/react';

describe('fetchRecipe', () => {
  const updateState = jest.fn(({states}) => states );
  const url = 'url';
  jest.mock("axios")
  const sucessMock = jest.fn(() => { data: {} } )
  const errorMock = jest.fn(() => 'Error data')

  describe('when server returns an 200 ok', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('calls the right promise', async() => {
      const sucessPromisseMock = Promise.resolve(sucessMock());
      axios.get = jest.fn().mockResolvedValue(sucessMock);

      await fetchRecipe(updateState, 'url');
      expect(updateState).toHaveBeenCalledTimes(2);
      expect(sucessMock).toHaveBeenCalledTimes(1);
      expect(errorMock).toHaveBeenCalledTimes(0);
    });
  })

  describe('when server returns an error catch', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('calls the right promise', async () => {
      axios.get = jest.fn().mockRejectedValue(errorMock());

      await fetchRecipe(updateState, 'url');
      expect(updateState).toHaveBeenCalledTimes(1);
      expect(sucessMock).toHaveBeenCalledTimes(0);
      expect(errorMock).toHaveBeenCalledTimes(1);
    });
  })
});
