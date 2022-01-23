import React from "react";
import "./Popup.css";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <form>
          <button className="close-btn" onClick={() => props.trigger(false)}>
            close
          </button>
          {props.block}
          <h1>CLAIM</h1>
          Get this block for free as <span className="blue">{props.user}</span>
          <div className="warning">You can only mint one block, choose wisely</div>
          <div className="imageBlock">
            <h2>Image Url</h2>
            We recommend to use a small image, 16x16px
            <input type="text" id="img" className="rounded" placeholder="https://i.imgur.com/bIWA1YE.png"/>
          </div>
          <div className="urlBlock">
          <h2>Choose a Redirect Url</h2>
          <input type="text" id="url" className="rounded" placeholder="https://www.exemple.com/"/>
          <br></br>
          </div>
          
          <input type="submit" className="rounded submit" value="MINT"/>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
