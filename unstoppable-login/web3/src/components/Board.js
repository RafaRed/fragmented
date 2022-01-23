import React, { useEffect, useState } from "react";
import './Board.css'
import ReactTooltip from 'react-tooltip';
import Popup from './Popup'
import firebase from '../model/firebase'

function CreateBoard(props){

    let size_x = 181;
    let size_y = 76;
    let rows = [];
    for (var i = 0; i < size_y; i++){
      let rowID = `row${i}`
      let cell = []
      for (var idx = 0; idx < size_x; idx++){
        let cellID = `${idx}-${i}`
        cell.push(<td key={cellID} id={cellID} className="block" data-for='block' data-tip='Claim' 
        onMouseOver={e => (e.target.style.boxShadow = 'inset 0px 0px 0px 1px #4c47f7')}
        onMouseOut={e => (e.target.style.boxShadow = 'inset 0px 0px 0px 1px #fff')}
        onClick={() => {props.setBlock(cellID);props.setButtonPopup(true)}} ></td>)
      }
      rows.push(<tr key={i} id={rowID}>{cell}</tr>)
    }
    return rows;
}

function Board() {
    
  const [buttonPopup, setButtonPopup] = useState(false);
  const [block, setBlock] = useState("0-0");
  return <div>
  <ReactTooltip id='block' place="right" type="info" getContent={(dataTip) => `${dataTip}`}/>
  <Popup trigger={buttonPopup} block={block} setTrigger={setButtonPopup} user={"rafaelsouza.crypto"}>
    <h1>test</h1>
  </Popup>

  <div className="space"></div>
  <div className="board">
    <table>
      <tbody>
          <CreateBoard setButtonPopup={setButtonPopup} setBlock={setBlock}/>
      </tbody>
    </table>
  </div>
</div>
}

export default Board;
