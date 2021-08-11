import { addShowsReducer, addShowDetailReducer } from '../../reducers/showsReducer';
import { types } from '../../types/types';

describe('Test shows reducer', () => {

  describe('List Shows reducer', () => {
    const defaultState = { 
      isLoading: false,
      shows: [],
    };

    test('should return default status', () => {
      const state = addShowsReducer(defaultState, {});
      expect(state).toEqual(defaultState);
    });

    test('should return shows result', () => {
      const action = {
        type: types.addShows,
        payload: {
          shows: [{
            id: 1,
            name: 'Rick and Morty'
          }],
        },
      };
      
      const state = addShowsReducer(defaultState, action);
      expect(state).toEqual({
        isLoading:false,
        shows: action.payload.shows
      });
    });

    test('should return loading state', () => {
      const action = {
        type: types.addShowsLoading,
      };
      const state = addShowsReducer(defaultState, action);

      expect(state).toEqual({
        isLoading: true,
        shows: [],
      });
    });

    test('should return error state', () => {
      const action = {
        type: types.addShowsError,
        error: {
          status: 400,
          message: 'Bad Request',
        },
      };
      const state = addShowsReducer(defaultState, action);

      expect(state).toEqual({
        isLoading: false,
        shows: [],
        error: action.error
      });
    });

  });

  describe('Add Show detail reducer', () => {
    const defaultState = {
      isLoading: false,
    };

    test('should return default state', () => {
      const state = addShowDetailReducer(defaultState, {});
      expect(state).toEqual(defaultState);
    });
  });

});