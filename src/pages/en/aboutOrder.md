---
title: About order
description: About order
layout: ../../layouts/MainLayout.astro
---

## Introduction

To create an order is to call the http interface request. You can visit the [order test tool ](/en/config)to check the effect. The source code warehouse is [here](https://github.com/nulls-network/dpay-tron-merchant) for development reference.

## Operation of the order

After successfully calling the interface for creating an order, the system will randomly generate a wallet address for payment, and set a **30 minutes** payment time limit to monitor the payment status of the order within the time limit. After the order is created, you can view the order status in the [Merchant management system](/en/config).

Merchant: What does this order have to do with me? Where does my income go?

Don't worry, let's take a look at how the order is generated and how to withdraw it?

## Generation of orders

The parameters of calling the create order interface need to be encrypted with the private key of the wallet to prove that you are the payee of the order and to ensure that the order has not been tampered with. If you don't know how to get a wallet yet, here's a [guide](https://ethereum.org/en/wallets/find-wallet/)，or take a look at [using metamask ](/en/useWallet)。You can view your account address (that is, the public key) in the wallet app or browser plugin, and you can also export the private key (please note that the private key represents your assets, which must be kept properly and not leaked).

Therefore, it can be concluded from the above that which wallet account you use to sign the order with the private key, you can use that wallet to log in to the merchant's background management system to view a series of order flow, various statistical information, and withdrawals.