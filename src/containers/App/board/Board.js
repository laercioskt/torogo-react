import React, { Component } from 'react';
import BoardPiece from './BoardPiece';
import BoardSlot from './BoardSlot';


class Board extends Component {

render() {    
    var svgFragments = [];
    for (var i = 0; i <= 18; i++) {
      for (var j = 0; j <= 18; j++) {
        svgFragments.push(<BoardSlot col={i} row={j} actions={this.props.actions} />);
        var piece = this.props.pieces.getIn([i,j]);
        if (piece === 1) svgFragments.push( <BoardPiece col={i} row={j} color="#F9F9F9" />);
        if (piece === 2) svgFragments.push( <BoardPiece col={i} row={j} color="#222222" />);
      }
    }

    var x = this.props.boardPosition.getIn("x");
    var y = this.props.boardPosition.getIn("y");
    return (
      <div >
          <span>{}</span>
          <button onClick={() => this.props.actions.moveBoard({x: -1, y: 0})}>Left</button>
          <button onClick={() => this.props.actions.moveBoard({x: 1, y: 0})}>Right</button>
          <button onClick={() => this.props.actions.moveBoard({x: 0, y: -1})}>Up</button>
          <button onClick={() => this.props.actions.moveBoard({x: 0, y: 1})}>Down</button>
          <svg height="800" width="100%" viewBox={x + " " + y + " 18 18"} preserveAspectRatio="xMinYMin meet">
             <rect height="18" width="18" y="0" x="0" fill="#ffbd13"/>
            {svgFragments}
          </svg>
      </div>
    );
  }
}

export default Board;