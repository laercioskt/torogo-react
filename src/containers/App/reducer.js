import { fromJS } from 'immutable';

import {
  BOARD,
  MOVE_BOARD,
  BLACK_TURN,
  WHITE_TURN,
  WHITE_PIECE,
  BLACK_PIECE
} from './constants';

const matrixGenerator = (size) => {
  var results = [];
  for (let i = 0; i < size; i++) {
    var row = [];
    for (let j = 0; j < size; j++)
      row.push(0);
//      row.push(Math.floor((Math.random() * 3)));
    results.push(row);
  }
  return results;
}

const initialState = fromJS({
  boardPosition: {x: 1, y: 1},
  gameState : BLACK_TURN,
  pieces: matrixGenerator(9),
});

const truePosition = (pieces, row, col) => {
    var size = pieces.size;

    var truePos = {row, col};

    if (col < 0) truePos.col = size + col;
    if (col >= size) truePos.col = size - col;
    if (row < 0) truePos.row = size + row;
    if (row >= size) truePos.row = size - row;

    return truePos;
}

const posToSelector = (pos) => [pos.row, pos.col];

const comparePos = (p1, p2) => p1.row === p2.row && p1.col === p2.col;

const countLiberties = (pieces, piecesAlreadyChecked, currentPiecePosition, color, groupOut) => {

    if(piecesAlreadyChecked.find(p => comparePos(p, currentPiecePosition))){
        return 0;
    }
    
    var col = currentPiecePosition.col;
    var row = currentPiecePosition.row;
    piecesAlreadyChecked.push(currentPiecePosition);

    var pieceColor = pieces.getIn(posToSelector(currentPiecePosition));

    if(pieceColor === 0){
        return 1;
    }

    if(pieceColor !== 0 && pieceColor !== color){
        return 0;
    }

    groupOut.push(currentPiecePosition);
    var left =  truePosition(pieces, row, col -1);
    var right = truePosition(pieces, row, col +1);
    var up =    truePosition(pieces, row -1, col);
    var down =  truePosition(pieces, row + 1, col);

    var othersSum = countLiberties(pieces, piecesAlreadyChecked, left , color, groupOut) +
                    countLiberties(pieces, piecesAlreadyChecked, up   , color, groupOut) +
                    countLiberties(pieces, piecesAlreadyChecked, right, color, groupOut) +
                    countLiberties(pieces, piecesAlreadyChecked, down , color, groupOut);

    return othersSum;
}

const getGroupToKill= (state, color, pos) => {
  let pieces = state.get("pieces");
  let piecesToKill = [];
  let row = pos.row;
  let col = pos.col;

    if(state.getIn(["pieces", pos.row, pos.col]) === color){
    let group = [];
    let libs = countLiberties(pieces, [], truePosition(pieces, row, col), color, group);
    if(libs === 0){
      return group;
    }
  }

  return [];
}

const getPiecesToKill = (state, color, pos) => {
  let pieces = state.get("pieces");
  let piecesToKill = [];

  var row = pos.row;
  var col = pos.col;

  piecesToKill = piecesToKill.concat(getGroupToKill(state, color, {row:pos.row - 1, col : pos.col     }));
  piecesToKill = piecesToKill.concat(getGroupToKill(state, color, {row:pos.row + 1, col : pos.col     }));
  piecesToKill = piecesToKill.concat(getGroupToKill(state, color, {row:pos.row    , col : pos.col - 1 }));
  piecesToKill = piecesToKill.concat(getGroupToKill(state, color, {row:pos.row    , col : pos.col + 1 }));

  return piecesToKill;
}

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
      break;
    case BOARD:
      let row = action.data.row;
      let col = action.data.col;

      if(state.getIn(["pieces", row, col]) !== 0){
          return state;
      }
      if(state.get('gameState') === BLACK_TURN){
        let stateAfterSet = state.setIn(["pieces", row, col], BLACK_PIECE);
        let toKill = getPiecesToKill(stateAfterSet, WHITE_PIECE, {row, col});
        toKill.forEach(p => stateAfterSet = stateAfterSet.setIn(["pieces", p.row, p.col],0 ));
        return stateAfterSet.set("gameState", WHITE_TURN);
      }
      if(state.get('gameState') === WHITE_TURN){
        let stateAfterSet = state.setIn(["pieces", action.data.row, action.data.col], WHITE_PIECE);
        let toKill = getPiecesToKill(stateAfterSet, BLACK_PIECE, {row, col});
        toKill.forEach(p => stateAfterSet = stateAfterSet.setIn(["pieces", p.row, p.col],0 ));
        return stateAfterSet.set("gameState", BLACK_TURN);
      }
      break;
    default:
      return state;
  }
};

export default appReducer;
