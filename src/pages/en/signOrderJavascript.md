---
title: Order sign using javascript
description: Order sign using javascript
layout: ../../layouts/MainLayout.astro
---
## Sign the order

The merchant uses its own private key (private key of the receiving account) to sign the order information data, to prevent the order data from being tampered with, and to confirm the merchant to which the order belongs.

Need to pay attention to the guaranteed order of toBytes method parameter passing.

## Reference code

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

## Order verification

The result is your public key.

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
