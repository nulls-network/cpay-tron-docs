---
title: 提现说明
description: 提现说明
layout: ../../layouts/MainLayout.astro
---

## 说明

还记得前面小节提到的订单的运作与生成吗？钱包的私钥代表了您的资产，订单签名所用的私钥，代表了您对该订单收入的所有权。

系统通过私钥签名数据验证商户身份，进而发起提现流程。

## 提现流程

先查询[可提现余额](/zh-CN/queryAssets)，后调用[提现接口](/zh-CN/doWithdraw)。

系统采用**D+1**结算规则，因此那些未结算的资金显示为冻结状态。所以需要查询可提现余额。
