import React, { PureComponent } from 'react';

class Defs extends PureComponent {

render() {    
    return <defs>
            <g id="blackPiece">
                <circle strokeWidth=".035006" cy=".52" cx=".52" r=".4" fill="#333333"/>
                <circle strokeWidth=".035006" cy=".5" cx=".5" r=".4" fill="#222222"/>
            </g>
            <g id="whitePiece">
                <circle strokeWidth=".035006" cy=".52" cx=".52" r=".4" fill="#333333"/>
                <circle strokeWidth=".035006" cy=".5" cx=".5" r=".4" fill="#F9F9F9"/>
            </g>
            <g id="boardSlot">
              <rect strokeWidth="0" height="1" width="1" y="0" x="0" fill="#ffbd13" />
              <path stroke="#000" strokeWidth=".100" d="m0.5 0v1.1" />
              <path stroke="#000" strokeWidth=".100"  d="m0 0.5h1.1" />
            </g>
          </defs>
  }
}

export default Defs;
