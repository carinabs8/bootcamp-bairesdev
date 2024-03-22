import { render, screen, act } from '@testing-library/react';
import { store } from '@/redux/store';
import Ingredients from './Ingredients';

import * as reactRedux from 'react-redux';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const useSelectorMock = reactRedux.useSelector as jest.MockedFunction<typeof reactRedux.useSelector>;
const useDispatchMock = reactRedux.useDispatch as jest.MockedFunction<typeof reactRedux.useDispatch>;

const mockDispatcher = jest.fn();

describe('Ingredients', () => {
  describe('When there are ingredients', () => {
    const mockStore = {
      recipeReducer: {
        data: {
          name: 'Apple pie',
          details: 'A simple apple pie description',
          ingredients: ['Apple', 'milk', 'biscuit']
        },
        type: 'FETCHED',
      }
    };

    beforeEach(() => {
      jest.clearAllMocks();
      useSelectorMock.mockImplementation(selector => selector(mockStore));
      useDispatchMock.mockImplementation(() => mockDispatcher);
    });

    it('Renders the component', async() => {
      render(
        <Ingredients/>
      );
      expect(screen.getByText('Description')).toBeDefined();
    });
  });

  describe('When there is no ingredients', () => {
    const mockStore = {recipeReducer: {data: null, type: 'IDLE'}};
    beforeEach(() => {
      jest.clearAllMocks();
      useSelectorMock.mockImplementation(selector => selector(mockStore));
      useDispatchMock.mockImplementation(() => mockDispatcher);
    });

    it('does not render the component', async() => {
      render(
        <Ingredients/>
      );

      expect(screen.queryByText('Description')).toBeNull() ;
    });
  });
});
