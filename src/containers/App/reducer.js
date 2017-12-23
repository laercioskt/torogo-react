import { fromJS } from 'immutable';

import {
  BOARD,
  MOVE_BOARD,
  GET_API_DATA,
  GET_API_DATA_LOADED,
  GET_API_DATA_ERROR,
} from './constants';

const initialState = fromJS({
  apiData: null,
  apiDataLoading: true,
  apiDataLoaded: null,
  apiDataError: null,
  boardPosition: {x: 0.5, y: 0.5},
  pieces: [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_BOARD:
      return state.update('boardPosition', (boardPosition) => {
        var newBoardPosition = boardPosition.update('x', (x) => x + action.data.x);
        return newBoardPosition.update('y', (y) => y + action.data.y);
      });
    case BOARD:
      return state.setIn(["pieces", action.data.col, action.data.row], 1);
    case GET_API_DATA:
      return state
        .set('apiDataLoading', true)
        .set('apiDataError', null);
    case GET_API_DATA_LOADED:
      return state
        .set('apiData', action.data)
        .set('apiDataLoading', false)
        .set('apiDataLoaded', true)
        .set('apiDataError', null);
    case GET_API_DATA_ERROR:
      return state
        .set('apiDataLoading', false)
        .set('apiDataLoaded', false)
        .set('apiDataError', action.error);
    default:
      return state;
  }
};

export default appReducer;
