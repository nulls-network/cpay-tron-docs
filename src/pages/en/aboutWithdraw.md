---
title: About Withdraw
description: About withdraw
layout: ../../layouts/MainLayout.astro
---

## Illustrate

Remember the operation and generation of orders mentioned in the previous subsection? The private key of the wallet represents your assets, and the private key used to sign the order represents your ownership of the income from the order.

The system verifies the identity of the merchant through the private key signature data, and then initiates the withdrawal process.

## Withdrawal process

1. Query [the withdrawable balance](/en/queryAssets)

2. Call [the withdrawal interface](/en/doWithdraw)

The system adopts the D+1 settlement rule, so those unsettled funds are displayed as frozen. Therefore, you need to check the available balance.
