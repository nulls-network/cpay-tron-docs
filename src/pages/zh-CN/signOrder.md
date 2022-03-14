---
title: 订单签名
description: 订单签名
layout: ../../layouts/MainLayout.astro
---
## 订单签名

商户使用自己的**私钥** (收款账户私钥) 对订单信息数据进行签名，防止订单数据被篡改，以及确认订单所属商户

## 参考代码

```javascript
import { ethers } from 'ethers'

const { concat, keccak256, toUtf8Bytes, SigningKey, joinSignature } = ethers.utils


function toBytes(...params) {
  if (typeof (params[0]) === 'object') params = params[0]
  const v = []
  for (const p of params) {
    if (typeof (p) === 'string')
      v.push(toUtf8Bytes(p))

    else
      v.push(toUtf8Bytes(String(p)))
  }
  return keccak256(concat(v))
}

export async function SignOrder(orderInfo = [], privateKey) {
  try {
    const bytesData = toBytes(orderInfo)

    console.log(bytesData)

    const signer = new SigningKey(`0x${privateKey}`)

    const signature = signer.signDigest(bytesData)

    return joinSignature(signature)
  }
  catch (error) {
    console.log(error)
  }
}
```

## 测试

```javascript
function test(){
  const USDT = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
  const orderInfo = {
      out_order_no: `1647226739883`,//please custom to your order number
      pay_chain: 'tron',
      pay_token: USDT,
      pay_amount: '0.2',
  }
  const privateKey = '3c2e669e46fa00d5913117be8550c3f3948f0134c7b7c7aac9c54df5014130e4'
  const signature = await SignOrder(Object.values(orderInfo), privateKey)
  console.log(signature)
  //result 0x2c75ccbfb3ff73125d4ee5ee84fc9b976b915aa2306e7fcc8af5c848f54fdfd15d4d7064bc3d56406f1fd4fc064cc3d2e2144e7a91065c251d10a6321d872a9d1b
}
```