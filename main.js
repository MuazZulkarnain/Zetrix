'use strict';

const ZtxChainSDK = require('zetrix-sdk-nodejs');

const sdk = new ZtxChainSDK({
  host: process.env.NODE_URL,
});

// Retrieve account balance by passing the address
sdk.account.getBalance(address).then(resp => {
    if (resp.errorCode === 0) {
      console.log(resp.result.balance);
    }
  }).catch(err => {
    console.log(err.message);
  });

  // Create a new account onchain
sdk.account.create().then(data => {
    console.log(data);
  }).catch(err => {
    console.log(err.message);
  });

  // Querying a contract
const data = yield sdk.contract.call({
    optType: 2,
    // Insert contract address
    contractAddress: contractAddress, 
    // Pass input parameters as a JSON string
    input: JSON.stringify({
      // Calling the 'getCertificateBySerialNumber' query function from the smart contract
      method: 'getCertificateBySerialNumber',
      // Passing the paramets for querying
      params: {
        serialNumber: "1237"
      }
    }),
  });

// Invoke a contract by sending tokens
const operationInfo = await sdk.operation.contractInvokeByGasOperation({
    sourceAddress: newAddress,
    contractAddress: contractAddress,
    // 0 ZETA will be sent
    amount: 0,
    // Input destination address under "to" and number of tokens under "value"
    input: '{\"method\":\"transfer\",\"params\":{\"to\":\"ZTX3Ta7d4GyAXD41H2kFCTd2eXhDesM83rvC3\",\"value\":\"10000000\"}}',
    metadata: 'invoking contract by sending tokens. 0 ZETRIX (gas) amount is sent'
  });