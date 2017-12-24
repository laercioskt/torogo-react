import React, { Component } from 'react';
import BoardPiece from './BoardPiece';
import BoardSlot from './BoardSlot';
import Logo from './Logo';


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
        if (piece != 0) svgFragments.push( <BoardPiece col={i} row={j} pieceType={piece} />);
      }
    }

    var x = this.props.boardPosition.getIn("x");
    var y = this.props.boardPosition.getIn("y");
    return (
      <div className="noselect" >
        <svg height="600" width="100%" viewBox={"-1 -1 "+(length+2)+" "+ (length+2)} preserveAspectRatio="xMedYMin meet">
          <defs>
            <g id="blackPiece">
                <circle strokeWidth=".035006" cy=".52" cx=".52" r=".4" fill="#333333"/>
                <circle strokeWidth=".035006" cy=".5" cx=".5" r=".4" fill="#222222"/>
                <Logo color="#333333"/>
            </g>
            <g id="whitePiece">
                <circle strokeWidth=".035006" cy=".52" cx=".52" r=".4" fill="#333333"/>
                <circle strokeWidth=".035006" cy=".5" cx=".5" r=".4" fill="#F9F9F9"/>
                <Logo color="#F9F9F9"/>
            </g>
            <g id="boardSlot">
              <rect strokeWidth="0" height="1" width="1" y="0" x="0" fill="#ffbd13" />
              <path stroke="#000" strokeWidth=".100" d="m0.5 0v1.1" />
              <path stroke="#000" strokeWidth=".100"  d="m0 0.5h1.1" />
            </g>
          </defs>
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