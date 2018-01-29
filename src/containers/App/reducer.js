import { fromJS } from 'immutable';

import {
  BOARD,
  MOVE_BOARD,
  BLACK_TURN,
  WHITE_TURN
} from './constants';

const matrixGenerator = (size) => {
  var results = [];
  for (let i = 0; i < size; i++) {
    var row = [];
    for (let j = 0; j < size; j++)
      row.push(Math.floor((Math.random() * 3)));
    results.push(row);
  }
  return results;
}

const initialState = fromJS({
  boardPosition: {x: 1, y: 1},
  gameState : BLACK_TURN,
  pieces: matrixGenerator(9),
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
      if(state.get('gameState') === BLACK_TURN){
          return state.setIn(["pieces", action.data.row, action.data.col], 1).set("gameState", WHITE_TURN);
      }
      if(state.get('gameState') === WHITE_TURN){
          return state.setIn(["pieces", action.data.row, action.data.col], 2).set("gameState", BLACK_TURN);
      }
    default:
      return state;
  }
};

export default appReducer;
