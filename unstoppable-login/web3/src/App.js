import logo from './logo.svg';
import './App.css';
import {UAuthConnector} from "@uauth/web3-react";
import UAuth from '@uauth/js'


const uauthConnector = new UAuthConnector({
  uauth: new UAuth({
      clientID: process.env.REACT_APP_CLIENT_ID,
      clientSecret: process.env.REACT_APP_CLIENT_SECRET,
      redirectUri: process.env.REACT_APP_REDIRECT_URI,
      postLogoutRedirectUri: process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI,
      scope: 'openid wallet',
  }),

})

async function login() {
  try {
    const auth = await uauthConnector.activate()
    console.log(auth)
  } catch (error) {
    console.error(error)
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={login}>logins</button>
        
      </header>
    </div>
  );
}

export default App;