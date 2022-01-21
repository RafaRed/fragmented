import {useWeb3React} from '@web3-react/core'
import {WalletConnectConnector} from '@web3-react/walletconnect-connector'
import React from 'react'
import {uauth} from './connectors'

// On login button click...

async function handleUAuthConnect() {
  const {activate} = useWeb3React()

  await activate(uauth)
}