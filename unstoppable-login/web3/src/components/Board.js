import React from 'react';
import './Board.css'
import ReactTooltip from 'react-tooltip';

function createBoard(){
    let size_x = 181;
    let size_y = 62;
    let rows = [];
    for (var i = 0; i < size_y; i++){
      let rowID = `row${i}`
      let cell = []
      for (var idx = 0; idx < size_x; idx++){
        let cellID = `cell${i}-${idx}`
        cell.push(<td key={cellID} id={cellID} className="block" data-for='block' data-tip='Claim' onClick={() => { console.log('clicked '+cellID) }}></td>)
      }
      rows.push(<tr key={i} id={rowID}>{cell}</tr>)
    }
    return rows;
}

function Board() {
    console.log(createBoard())
    
  return <div>
  <ReactTooltip id='block' place="right" type="info" getContent={(dataTip) => `${dataTip}`}/>
  <div className="space"></div>
  <div className="board">
    <table>
      <tbody>{createBoard()}</tbody>
    </table>
  </div>
</div>
}

export default Board;
