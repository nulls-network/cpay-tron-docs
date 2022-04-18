---
title: Generate sign(JS)
description: Generate sign(JS)
layout: ../../layouts/MainLayout.astro
---
## 说明

Using nodejs，dependency ethers.js.    
On the one hand, to ensure that the order data is not tampered with, on the other hand, the signature data can be used to unlock the signer's public key to confirm the identity of the merchant.
## How to use

https://github.com/nulls-network/sign-tool-nodejs.git

## Example
### Generate sign

```
  npm run sign
```

![sign](/sign-tool1.png)
### Reover public key

```
  npm run recover
```
![sign](/sign-tool2.png)





