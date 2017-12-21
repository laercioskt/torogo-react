import React, { Component } from 'react';

class Board extends Component {
  render() {
    var that = this;      
    var color = (par) => (par === 1) ? "black" :"white";
    var stoneSize = 26;
    if (that.props.pieces){
      return (
        <div>
          <div>
<svg height="35" width="35" viewBox="0 0 9.2604165 9.2604169">

<g>
<svg>
	<rect height="9.2604" width="9.2604" y="4.614e-8" x="0" fill="#ffbd13"/>
	<path d="m4.6295-0.0011599 0.00146 9.2627" stroke="#000" stroke-width=".26458px" fill="none"/>
	<path d="m9.2616 4.6295-9.2627 0.00146" stroke="#000" stroke-width=".26458px" fill="none"/>
</svg>
</g>


</svg>
  

        </div>
          
          <svg height={stoneSize*18} width={stoneSize*18}>
          <rect width="100%" height="100%" fill="#ffc676ff"/>
          {
              that.props.pieces.map(function(boardRow, row)
              {
                return boardRow.map(function(piece, col)
                  {
                    return <rect 
                      onClick={() => that.props.actions.getBoard({row, col})}
                      style={{stroke:"#000000"}} 
                      width={stoneSize} 
                      height={stoneSize} 
                      x={stoneSize*col} 
                      y={stoneSize*row} 
                      fill={color(0)} />
                  }
                );
              })
            }
            {
              that.props.pieces.map(function(boardRow, row)
              {
                return boardRow.map(function(piece, col)
                  {
                    if (piece === 0) return;
                    return <circle 
                      style={{stroke:"#000000"}} 
                      cx={stoneSize*col+(stoneSize/2)} 
                      cy={stoneSize*row+(stoneSize/2)} 
                      r={stoneSize/2.3}
                      fill={color(piece)} />
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