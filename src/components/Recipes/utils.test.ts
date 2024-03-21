import { fetchRecipe } from './utils';
import { fetching, fetched } from '@/redux/features/recipeSlice';
import { AppDispatch } from '@/redux/store';
import axios from "axios";

describe('fetchRecipe', () => {
  const dispatch = jest.fn();
  const url = 'url';
  jest.mock("axios")
  const sucessMock = jest.fn(() => { data: {} } )
  const errorMock = jest.fn(() => new Error('Error data'))

  describe('when server returns an 200 ok', () => {
    const mockFetching = jest.fn((state, action) => state ) as AppDispatch;
    const recipeSlice = jest.mock('../../redux/features/recipeSlice', () => {
      return {
        __esModule: true,
        default: jest.fn(),
        fetching: mockFetching,
      };
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('calls the right promise', () => {
      const sucessPromisseMock = Promise.resolve(sucessMock());
      axios.get = jest.fn().mockResolvedValue(sucessMock);

      fetchRecipe(dispatch, 'url');
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(sucessMock).toHaveBeenCalledTimes(1);
      expect(errorMock).toHaveBeenCalledTimes(0);
    });
  })

  describe('when server returns an error catch', () => {
    const mockFetching = jest.fn((state, action) => state ) as AppDispatch;
    const recipeSlice = jest.mock('../../redux/features/recipeSlice', () => {
      return {
        __esModule: true,
        default: jest.fn(),
        fetching: mockFetching,
      };
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('calls the right promise', () => {
      axios.get = jest.fn().mockRejectedValue(errorMock());

      fetchRecipe(dispatch, 'url');
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(sucessMock).toHaveBeenCalledTimes(0);
      expect(errorMock).toHaveBeenCalledTimes(1);
    });
  })
});
