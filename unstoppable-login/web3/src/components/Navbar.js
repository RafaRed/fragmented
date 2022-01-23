import React from "react";
import './Navbar.css'

function LoginButton(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <div className="loginButton"><div className="loginText">{props.domain}

    </div><input type="image" src={"images/ud-logged.png"} onClick={()=> {props.logout()} } 
    onMouseOver={e => (e.currentTarget.src = "images/ud-logged-hover.png")}
    onMouseOut={e => (e.currentTarget.src = "images/ud-logged.png")} /></div>;
  }
  return <input type="image" src={"images/ud.png"} onClick={()=> {props.login()} } 
  onMouseOver={e => (e.currentTarget.src = "images/ud-hover.png")}
  onMouseOut={e => (e.currentTarget.src = "images/ud.png")}/>;
}


function Navbar(props) {

  return (
    
    <div className="header">
     
      <div className="title">
        <h1>FRAGMENTED</h1>
        <p>Get a block for <span className="blue">you</span>.</p>
      </div>
      <div className="connect">
        <p className="claim-as">Claim a block as</p>
        <LoginButton isLoggedIn={props.isConnected} login={props.login} domain={props.domain} logout={props.logout}/>
        
      </div>
    </div>
  );
}




export default Navbar;
