---
title: 订单签名
description: 订单签名
layout: ../../../layouts/MainLayout.astro
---
## 订单签名

商户使用自己的**私钥** (收款账户私钥) 对订单信息数据进行签名，防止订单数据被篡改，以及确认订单所属商户

需要注意 toBytes 方法参数传递保证一定的顺序

## 签名参考

```javascript
import { ethers } from 'ethers'

const { concat, keccak256, toUtf8Bytes, SigningKey, joinSignature } = ethers.utils


function toBytes(...params) {
  const v = []
  for (const p of params) {
    if (typeof (p) === 'string')
      v.push(toUtf8Bytes(p))

    else
      v.push(toUtf8Bytes(String(p)))
  }
  return keccak256(concat(v))
}

export async function SignOrder(orderInfo = {}, privateKey) {
  try {
    const bytesData = toBytes(
      orderInfo.out_order_no,
      orderInfo.pay_chain,
      orderInfo.pay_token,
      orderInfo.pay_amount,
      orderInfo.notify,
    )

    const signer = new SigningKey(`0x${privateKey}`)

    const signature = signer.signDigest(bytesData)

    return joinSignature(signature)
  }
  catch (error) {
    console.log(error)
  }
}
```

## 验签参考（解出公钥）

```javascript

export async function Recover(bytesData, signature) {
  try {
    const sig = ethers.utils.splitSignature(signature)
    const recovered = ethers.utils.recoverAddress(bytesData, sig)
    return recovered
  }
  catch (e) {
    return null
  }
}
```
