---
title: Integration Signing Service 
description: Integration Signing Service
layout: ../../layouts/MainLayout.astro
---

## Illustrate
The signature algorithm adopts the elliptic curve algorithm widely used in blockchain. In order to adapt to the docking of different programming languages, it provides an http service that implements order signing by rust. Please note that since the signature will use the wallet private key, please run the service on the intranet.

## Download Tool
According to your current operating system, select the corresponding file to download [here](https://github.com/nulls-network/sign-order-service/releases).

## Example (macOs M1）
### 1.Download the corresponding file MAC_ARM64

### 2.Increase the execution permission
```code
sudo chmod a+x ./MAC_ARM64
```

### 3.Run
default port is 8080, you can change it.
```code
./MAC_ARM64 8080
```

## Testing  
The tool can also be used in other scenarios that require signatures, such as [binding the user's payment address](/en/bindReceiveAddress) 、[Withdraw](/en/doWithdraw)

### Order signature
Data is the order parameter, to ensure that the incoming order is consistent, in order: order number, blockchain, currency contract, payment amount, notification callback address.

![sign](/sign.png)

### Order verification
Returns the wallet account used for the signature
    
![recover](/recover.png)

### Create Order

URL: /v1/order/create

![create](/order.png)


