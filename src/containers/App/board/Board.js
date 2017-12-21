import React, { Component } from 'react';

class Board extends Component {
  render() {
    var that = this;      
    var color = (par) => (par === 1) ? "black" :"white";
    var stoneSize = 26;
    var squares = [];
    for (var i = 0; i <= 18; i++) {
      for (var j = 0; j <= 18; j++) {
          squares.push(<g transform={"translate("+i+","+j+")"}>
                        <svg>
                          <rect height="1" width="1" y="0" x="0" fill="#ffbd13"/>
                          <path stroke="#000" strokeWidth=".100" d="m0.5 0v1" />
                          <path stroke="#000" strokeWidth=".100"  d="m1 0.5h-1" />
                        </svg>
                      </g>);
      }
    }
    if (that.props.pieces){
      return (
        <div>
            <svg height="1000" width="1000" viewBox="0 0 18 18">
            {squares}
            {
              that.props.pieces.map(function(boardRow, row)
              {
                return boardRow.map(function(piece, col)
                  {
                    if (piece === 0) return;
                    return <g transform={"translate("+col+","+row+")"}>
                            <svg>
                              <circle strokeWidth=".035006" cy=".52" cx=".52" r=".4" fill="#333333"/>
                              <circle strokeWidth=".035006" cy=".5" cx=".5" r=".4" fill="#F9F9F9"/>
                            </svg>
                          </g>
              }
                );
              })
            }
          </svg>
        </div>
      );
    }
    return (<span>teste</span>)
  }
}

export default Board;