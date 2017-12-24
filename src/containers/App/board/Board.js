import React, { Component } from 'react';
import BoardPiece from './BoardPiece';
import BoardSlot from './BoardSlot';


class Board extends Component {

render() {    
    var svgFragments = [];
    var length = this.props.pieces.size;
    for (var i = length * -1; i <= length * 2; i++) {
      for (var j = length * -1; j <= length * 2; j++) {
        svgFragments.push(<BoardSlot col={i} row={j} actions={this.props.actions} boardSize={length} />);
        var col = i < 0 ? length + i % length : i % length; 
        var row = j < 0 ? length + j % length : j % length;
        var piece = this.props.pieces.getIn([row, col]);
        if (piece === 1) svgFragments.push( <BoardPiece col={i} row={j} color="#F9F9F9" />);
        if (piece === 2) svgFragments.push( <BoardPiece col={i} row={j} color="#222222" />);
      }
    }

    var x = this.props.boardPosition.getIn("x");
    var y = this.props.boardPosition.getIn("y");
    return (
      <div className="noselect" >
        <svg height="600" width="100%" viewBox={"-1 -1 "+(length+2)+" "+ (length+2)} preserveAspectRatio="xMedYMin meet">
          <g transform={"translate("+x+","+y+")"} >
            <rect height={length} width={length} y="0" x="0" fill="#ffbd13"/>
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