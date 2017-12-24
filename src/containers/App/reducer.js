import { fromJS } from 'immutable';

import {
  BOARD,
  MOVE_BOARD,
  GET_API_DATA,
  GET_API_DATA_LOADED,
  GET_API_DATA_ERROR,
} from './constants';

const matrixGenerator = (size) => {
  var results = new Array();
  for (let i = 0; i < size; i++) {
    var row = new Array();
    for (let j = 0; j < size; j++)
      row.push(Math.floor((Math.random() * 3)));
    results.push(row);
  }
  return results;
}

const initialState = fromJS({
  apiData: null,
  apiDataLoading: true,
  apiDataLoaded: null,
  apiDataError: null,
  boardPosition: {x: 1, y: 1},
  pieces: matrixGenerator(18),
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_BOARD:
        var size = state.get('pieces').size;
        return state.update('boardPosition', (boardPosition) => {
        var newBoardPosition = boardPosition.update('x', (x) => {
          if (x > (size/2)) x = x - size;
          if (x < (size/2)*-1) x = x + size;
          return x + action.data.x;
        });
        return newBoardPosition.update('y', (y) => {
          if (y >  (size/2)) y = y - size;
          if (y < (size/2)*-1) y = y + size;
          return y + action.data.y;
        });
      });
    case BOARD:
      return state.setIn(["pieces", action.data.row, action.data.col], 1);
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
