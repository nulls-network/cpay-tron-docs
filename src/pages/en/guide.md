---
title: Guide
description: Guide
layout: ../../layouts/MainLayout.astro
---
# Generate Merchant ID and Secret Key
When the system is structured, it is more crypto-native by using elliptic curve digital signature, which also simplifies the access process of merchants. Different from the traditional payment system, there is no need to open a merchant account and configure a secret key. You only need to generate a key pair through wallet tools or the corresponding SDK, such as Metamask/ethers.js to generate accounts and keys.

## Using Metamask
Go to the Metamask official website https://metamask.io/download/ to download the corresponding client. It is recommended to use the Chrome plugin of Metamask. ([More detail](/en/useWallet)) 

## Using the ethers.js SDK

### Install 
```
npm install --save ethers
```
Reference documentation：https://docs.ethers.io/v5/getting-started/#installing

### Generate Account
```
ethers.Wallet.createRandom()
```
Reference documentation：https://docs.ethers.io/v5/api/signer/#Wallet


## Instructions for use
The backend adopts the Web3.0 architecture, and a wallet plug-in that supports EVM is required when accessing from the browser. Such as Metamask / MataWallet / TrustWallet etc.

After the wallet is connected, you can view all transaction information signed with the wallet's private key.

## Order request signature
You can check the signature guidelines. If you use languages ​​such as PHP / JAVA, it is recommended to use the signature service for signature and verification.([Signature guidelines ](/en/signOrderService)) 

