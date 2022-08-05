---
title: Withdrawal interface (callback can be notified)
description: Withdrawal interface (callback can be notified)
layout: ../../layouts/MainLayout.astro
---

## Withdrawal interface (callback can be notified)

**Url**: [[baseUrl]](/zh-CN/variables)/v1/merchant/withdrawAndNotify

**Method**: POST

**content-type**: application/json

**Signature Field Order:**

to,token,amount,fromChain,toChain,uuid,notify_url

**Request body**:

| Parameter | Type   | Description                                                                                   |
| --------- | ------ | ----------------------------------------------------------------------- |
| to        | string | Withdraw to the specified account (base58 format), such as TLjg42ZBsEU161bBYorRR9yfve8EKTcZL9    |
| token     | string | Specify TRON USDT，TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t                       |
| amount    | string | Withdrawal amount (with currency precision)                                                  |
| fromChain | string | Specify TRON , currently only TRON chains are supported                                            |
| toChain   | string | Specify TRON , currently only TRON chains are supported                                            |
| uuid      | string | Merchants generate random characters by themselves to prevent duplicate signature values                                    |
| notify_url| string | The callback address of the result |     
| signature | string | The above field signature is  generated Adopted the v1 signature method          |
| from      | string | Merchant wallet address (hex format, such as 0x2143d11B31b319C008F59c2D967eBF0E5ad2791d） |
| isPayment      | boolean | Default false, fee method false: withdraw 10U, fee 0.5U, credit 9.5U, true: withdraw 10U, deposit 10U, fee 0.5U will be deducted from the balance（do not participate in signing） |
**Response body**

| Filed | Type   | Description                                      |
| ---- | ------ | ------------------- |
| hash | string | Request for withdrawal transaction hash |

## Example

### Parameter

```json
{
  "to": "TQZhgSEiWaavy1SBtxHxr7ucPpCRqjomvr",
  "token": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  "amount": "10000",
  "fromChain": "tron",
  "toChain": "tron",
  "uuid": "20220617163737",
  "signature": "0xce52adc67f7d508c593f2c7c77e68f369d1e1aeb9445d0a415049677328248222b69e5082cc19b30d518e77f533dde22c05ed79f472a435a6159f9151c9377511b",
  "from": "0x2143d11B31b319C008F59c2D967eBF0E5ad2791d",
  "notify_url": "https://test-notify.vercel.app/api/index"
}
```

### Response

```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "hash": "0xaab6122297b5a0302549372381a735dc51a3ed5fc0b641339ce1a1097f920bb2"
  }
}
```



