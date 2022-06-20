---
title: Withdraw
description: Withdraw
layout: ../../layouts/MainLayout.astro
---

## Request

**Url**: [[baseUrl]](/en/variables)/v1/merchant/doWithdraw

**Method**: POST

**content-type**: application/json

**Request body**:

| Parameter | Type   | Description                                                                                   |
| --------- | ------ | --------------------------------------------------------------------------------------------- |
| to        | string | Withdraw to the specified account (base58 format), such as TLjg42ZBsEU161bBYorRR9yfve8EKTcZL9 |
| token     | string | Specify TRON USDT, TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t                                         |
| amount    | string | Withdrawal amount (with currency precision)                                                   |
| fromChain | string | Specify tron ​​, currently only TRON chains are supported                                     |
| toChain   | string | Specify tron ​​, currently only TRON chains are supported                                     |
| uuid      | string | Merchants generate random characters by themselves to prevent duplicate signature values      |
| signature | string | The above field signature is generated Adopted the v1 signature method         |
| from      | string | Merchant wallet address (hex format, such as 0x2143d11B31b319C008F59c2D967eBF0E5ad2791d)      |

**Response body**

| Filed | Type   | Description                                      |
| ----- | ------ | ------------------------------------------------ |
| hash  | string | The transaction hash for applying for withdrawal |

## Example

### Parameter

```json
{
  "to": "TLjg42ZBsEU161bBYorRR9yfve8EKTcZL9",
  "token": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  "amount": "2000",
  "fromChain": "tron",
  "toChain": "tron",
  "uuid": "2036a504-d1ec-4497-8612-a9e663b06922",
  "signature": "0xae4413272b5a386fb9972dae8db377092545f0a30ffa6e22d2308d4e6301a630295cdc483c741aaddb707597903e1218393c634c5211f10a65622bf4f38569d11c",

  "from": "0x2143d11B31b319C008F59c2D967eBF0E5ad2791d" //no need sign thi filed
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

## Testing

### 1.Check the balance

![assets](/assets.png)

### 2.Sign（Using integration service）

![assets](/sign-withdraw.png)

### 3.Call withdrawal

![assets](/withdraw.png)
