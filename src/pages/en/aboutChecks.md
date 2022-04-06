---
title: Order receive
description: Order receive
layout: ../../layouts/MainLayout.astro
---

## Introduce
The UI interface of the cashier and cashier is developed and displayed by the merchant, and includes the following core contents.
## Payment address
The wallet address used for payment is the rec_address field returned in the order creation interface, which is the payment address randomly generated and assigned by the system.
## Order time limit
The order validity period is specified by the system as **20 minutes** , please display the payment countdown in a prominent place to avoid reconciliation disputes.
## Transaction blockchain
Using TRON blockchain, and currently only supports USDT transactions.