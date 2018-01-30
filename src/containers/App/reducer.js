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
    if (col > size) truePos = size - col;
    if (row < 0) truePos = size + row;
    if (row > size) truePos = size - row;

    return truePos;
}

const posToSelector = (pos) => [pos.row, pos.col];

const comparePos = (p1, p2) => p1.row === p2.row && p1.col === p2.col;

const countLiberties = (pieces, piecesAlreadyChecked, currentPiecePosition, color) => {
    var size = pieces.size;

    var col = currentPiecePosition.col;
    var row = currentPiecePosition.row;
    piecesAlreadyChecked.push(currentPiecePosition);

    var left =  truePosition(pieces, row, col -1);
    var right = truePosition(pieces, row, col +1);
    var up = truePosition(pieces, row -1, col);
    var down = truePosition(pieces, row + 1, col);

    var upPiece = pieces.getIn(posToSelector(up));
    var downPiece = pieces.getIn(posToSelector(down));
    var leftPiece = pieces.getIn(posToSelector(left));
    var rightPiece = pieces.getIn(posToSelector(right));

    var liberties = 0;

    console.log(piecesAlreadyChecked)
    if( piecesAlreadyChecked.find(p => comparePos(p, up) ) === undefined ){
      if ( upPiece === color ){
          liberties += countLiberties(pieces, piecesAlreadyChecked, up, color);
      }
      if( upPiece === 0 ){
          liberties += 1;
          piecesAlreadyChecked.push(up);
      }
      if(upPiece != color && upPiece != 0){
          piecesAlreadyChecked.push(up);
      }
    }
    if( piecesAlreadyChecked.find(p => comparePos(p, down) ) === undefined ){
        if ( downPiece === color ){
            liberties += countLiberties(pieces, piecesAlreadyChecked, down, color);
        }
        if( downPiece === 0 ){
            liberties += 1;
            piecesAlreadyChecked.push(down);
        }
        if(downPiece != color && downPiece != 0){
            piecesAlreadyChecked.push(down);
        }
    }
    if( piecesAlreadyChecked.find(p => comparePos(p, left) ) === undefined ){
        if ( leftPiece === color ){
            liberties += countLiberties(pieces, piecesAlreadyChecked, left, color);
        }
        if( leftPiece === 0 ){
            liberties += 1;
            piecesAlreadyChecked.push(left);
        }
        if(leftPiece != color && leftPiece != 0){
            piecesAlreadyChecked.push(left);
        }
    }
    if( piecesAlreadyChecked.find(p => comparePos(p, right) ) === undefined ){
        if ( rightPiece === color ){
            liberties += countLiberties(pieces, piecesAlreadyChecked, right, color);
        }
        if( rightPiece === 0 ){
            liberties += 1;
            piecesAlreadyChecked.push(right);
        }
        if(rightPiece != color && rightPiece != 0){
            piecesAlreadyChecked.push(right);
        }
    }

    return liberties;    
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
    case BOARD:
      if(state.getIn(["pieces", action.data.row, action.data.col]) != 0){
          return state;
      }
      if(state.get('gameState') === BLACK_TURN){
          var stateAfterSet = state.setIn(["pieces", action.data.row, action.data.col], BLACK_PIECE);
          var pieces = stateAfterSet.get("pieces");
          if(state.getIn(["pieces", action.data.row - 1, action.data.col]) === WHITE_PIECE){
              console.log("libertiesup");
              console.log(countLiberties(pieces, [], truePosition(pieces, action.data.row - 1, action.data.col), WHITE_PIECE));
          }
          if(state.getIn(["pieces", action.data.row + 1, action.data.col]) === WHITE_PIECE){
              console.log("libertiesdown");
              console.log(countLiberties(pieces, [], truePosition(pieces, action.data.row - 1, action.data.col), WHITE_PIECE));
          }
          if(state.getIn(["pieces", action.data.row , action.data.col -1 ]) === WHITE_PIECE){
              console.log("libertiesleft");
              console.log(countLiberties(pieces, [], truePosition(pieces, action.data.row - 1, action.data.col), WHITE_PIECE));
          }
          if(state.getIn(["pieces", action.data.row, action.data.col + 1]) === WHITE_PIECE){
              console.log("libertiesright");
              console.log(countLiberties(pieces, [], truePosition(pieces, action.data.row - 1, action.data.col), WHITE_PIECE));
          }
          return stateAfterSet.set("gameState", WHITE_TURN);
      }
      if(state.get('gameState') === WHITE_TURN){
          var stateAfterSet = state.setIn(["pieces", action.data.row, action.data.col], WHITE_PIECE);
          var pieces = stateAfterSet.get("pieces");
          if(state.getIn(["pieces", action.data.row - 1, action.data.col]) === BLACK_PIECE){
              console.log("libertiesup");
              console.log(countLiberties(pieces, [], truePosition(pieces, action.data.row - 1, action.data.col), BLACK_PIECE));
          }
          if(state.getIn(["pieces", action.data.row + 1, action.data.col]) === BLACK_PIECE){
              console.log("libertiesdown");
              console.log(countLiberties(pieces, [], truePosition(pieces, action.data.row - 1, action.data.col), BLACK_PIECE));
          }
          if(state.getIn(["pieces", action.data.row , action.data.col -1 ]) === BLACK_PIECE){
              console.log("libertiesleft");
              console.log(countLiberties(pieces, [], truePosition(pieces, action.data.row - 1, action.data.col), BLACK_PIECE));
          }
          if(state.getIn(["pieces", action.data.row, action.data.col + 1]) === BLACK_PIECE){
              console.log("libertiesright");
              console.log(countLiberties(pieces, [], truePosition(pieces, action.data.row - 1, action.data.col), BLACK_PIECE));
          }
          return stateAfterSet.set("gameState", BLACK_TURN);

      }
    default:
      return state;
  }
};

export default appReducer;
