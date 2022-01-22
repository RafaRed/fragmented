import React from "react";
import './Navbar.css'

function Navbar() {
  return (
    <div className="header">
      <div className="title">
        <h1>FRAGMENTED</h1>
        <p>Get a block for <span className="blue">you</span>.</p>
      </div>
      <div className="connect">
        <p className="claim-as">Claim a block as</p>
        <input type="image" src="images/ud.png" />
      </div>
    </div>
  );
}

export default Navbar;
