import { fetchRecipe } from './utils';
import axios from 'axios';

import { act } from '@testing-library/react';

describe('fetchRecipe', () => {
  const updateState = jest.fn(({states}) => states );
  const url = 'url';
  jest.mock('axios');
  const sucessMockData = { data: { name: 'apple pie', details: 'apple pie details', ingredients: ['apple', 'milk']} };
  const errorMockData = 'Error data';

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('when server returns an 200 ok', () => {
    it('calls the right promise', async() => {
      axios.get = jest.fn().mockResolvedValue(sucessMockData);

      await act (() => { fetchRecipe({updateState, url}); });
      expect(updateState).toHaveBeenCalledWith({type: 'FETCHING'});
      expect(updateState).toHaveBeenCalledWith(expect.objectContaining({
        type: 'FETCHED',
        name: 'apple pie',
        details: 'apple pie details',
        ingredients: ['apple', 'milk'],
      }));

      expect(updateState).not.toHaveBeenCalledWith(
        expect.objectContaining({type: 'API-ERROR'})
      );
    });
  });

  describe('when server returns an error catch', () => {
    it('calls the right promise', async () => {
      axios.get = jest.fn().mockRejectedValue(errorMockData);

      await act(() => { fetchRecipe({updateState, url}); });
      expect(updateState).toHaveBeenCalledWith({type: 'FETCHING'});
      expect(updateState).not.toHaveBeenCalledWith(
        expect.objectContaining({type: 'FETCHED'})
      );
      expect(updateState).toHaveBeenCalledWith({
        type: 'API-ERROR', error: 'Error data'
      });
    });
  });
});
