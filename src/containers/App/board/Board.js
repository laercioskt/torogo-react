import React, { Component } from 'react';
import BoardPiece from './BoardPiece';
import BoardSlot from './BoardSlot';
import Logo from './Logo';
import Defs from './Defs';


class Board extends Component {

render() {    
    var svgFragments = [];
    var length = this.props.pieces.size;
    var leftBorder =  length * -1;
    var rightBorder = length * 2;
    console.log({leftBorder, rightBorder});
    for (var i = leftBorder; i <= rightBorder; i++) {
      for (var j = leftBorder; j <= rightBorder; j++) {
        svgFragments.push(<BoardSlot col={i} row={j} actions={this.props.actions} boardSize={length} />);
        var col = i < 0 ? length + i % length : i % length; 
        var row = j < 0 ? length + j % length : j % length;
        var piece = this.props.pieces.getIn([row, col]);
        if (piece != 0) svgFragments.push( <BoardPiece col={i} row={j} pieceType={piece} />);
      }
    }

    var x = this.props.boardPosition.getIn("x");
    var y = this.props.boardPosition.getIn("y");
    return (
      <div className="noselect" >
        <svg height="600" width="100%" viewBox={"-1 -1 "+(length+2)+" "+ (length+2)} preserveAspectRatio="xMedYMin meet">
          <Defs />
          <g transform={"translate("+x+","+y+")"} >
            <rect height={length*3} width={length*3} y={-length} x={-length} fill="#ffbd13"/>
            {svgFragments}
          </g>
          <g>
            <rect onClick={() => this.props.actions.moveBoard({x: 0.36, y: 0})} height="100%" width="100" y="-1" x="-100" fill="#cccccc"/>
            <rect onClick={() => this.props.actions.moveBoard({x: -0.36, y: 0})} height="100%" width="100" y="-1" x={length} fill="#cccccc"/>
            <rect onClick={() => this.props.actions.moveBoard({x: 0, y: 0.36})} height="100" width="100%" y="-100" x="-1" fill="#cccccc"/>
            <rect onClick={() => this.props.actions.moveBoard({x: 0, y: -0.36})} height="100" width="100%" y={length} x="-1" fill="#cccccc"/>
          </g>
        </svg>
      </div>
    );
  }
}

export default Board;