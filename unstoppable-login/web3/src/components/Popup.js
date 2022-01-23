import React , {useState} from "react";
import "./Popup.css";
import firebase from '../model/firebaseConnect'
import { getDatabase, ref, set } from "firebase/database";

function Popup(props) {
  const [img,setImg] = useState("https://i.imgur.com/bIWA1YE.png")
  const [url,setUrl] = useState("https://www.exemple.com/")

  const handleOnChangeImg = (e) => {
    setImg(e.target.value);
  }
  const handleOnChangeUrl = (e) => {
    setUrl(e.target.value);
  }

  const mintBlock = () => {
    const db = getDatabase();
    set(ref(db, 'blocks/'+props.block), {
      block_id:props.block,
      block_url:url,
      block_img:img,
      block_owner:props.hash
    });
    props.setTrigger(false);
  }

  
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">

          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            close
          </button>
           <p className="log">block {props.block}</p>
          <h1>CLAIM</h1>
          Get this block for free as <span className="blue">{props.domain}</span>
          <div className="warning">You can only mint one block, choose wisely.</div>
          <div className="imageBlock">
            <h2>Image Url</h2>
            We recommend to use a small image, 16x16px
            <input type="text" id="img" onChange={handleOnChangeImg} className="rounded" placeholder="https://i.imgur.com/bIWA1YE.png"/>
          </div>
          <div className="urlBlock">
          <h2>Choose a Redirect Url</h2>
          <input type="text" id="url" className="rounded" onChange={handleOnChangeUrl} placeholder="https://www.exemple.com/"/>
          <br></br>
          </div>
          
          <button onClick={mintBlock} className="submit rounded">MINT</button>

      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
