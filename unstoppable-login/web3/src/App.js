import "./App.css";
import React, { Component } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected, walletconnect, uauth } from "./connectors";

function withUseWeb3React(Component) {
  return function WrappedComponent(props) {
    const values = useWeb3React();
    return <Component {...props} web3ReactHook={values} />;
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
      showDomain: false,
      domain: "",
    };

    this.connectMetamask = this.connectMetamask.bind(this);
    this.connectUnstoppable = this.connectUnstoppable.bind(this);
    this.logout = this.logout.bind(this);
    this.listConnections = this.listConnections.bind(this);
  }

  async connectMetamask() {
    console.log(injected);
    console.log(this.props.web3ReactHook.activate(injected, undefined, true));

    this.props.web3ReactHook
      .activate(injected, null, true)
      .then((res) => {
        injected
          .getAccount()
          .then((account) => {
            console.log(account);
            this.setState({
              isConnected: true,
            });
          })
          .catch((e) => {
            alert(e);
            console.error(e);
          });
      })
      .catch((e) => {
        alert(e);
        console.error(e);
      });
  }

  async connectUnstoppable() {
    this.props.web3ReactHook
      .activate(uauth, null, true)
      .then(async (res) => {
        let user = await uauth.user();
        uauth
          .getAccount()
          .then((account) => {
            this.setState({
              isConnected: true,
              showDomain: true,
              domain: user.sub,
            });
          })
          .catch((e) => {
            alert(e);
            console.error(e);
          });
      })
      .catch((e) => {
        alert(e);
        console.error(e);
      });
  }

  logout() {
    this.props.web3ReactHook.deactivate();
    injected.deactivate();
    uauth.deactivate();
    this.setState({
      isConnected: false,
      showDomain: false,
      domain: "",
    });
    window.ethereum.removeListener("chainChanged", window.location.reload());
  }

  listConnections() {
    let connectAction;
    if (this.state.isConnected) {
      let address;
      let hash = this.props.web3ReactHook.account;
      if (this.state.showDomain) {
        address = "Unstoppable Domain:" + this.state.domain +" "+ hash;
      } else {
        address = "Wallet:" + hash;
      }

      connectAction = (
        <>
          {address}
          <button onClick={this.logout}>Logout</button>
        </>
      );
    } else {
      connectAction = (
        <>
          <button
            onClick={this.connectMetamask}
          >
            Login with Metamask
          </button>

          <button onClick={this.connectUnstoppable}>
            Login with Unstoppable
          </button>
        </>
      );
    }
    return <div>{connectAction}</div>;
  }

  render() {
    
    let chooseConnection = this.listConnections();
    return (
      <div className="loginFrame">
        {chooseConnection}
      </div>
    );
  }
}

export default withUseWeb3React(App);
