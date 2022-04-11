---
title: Create Order
description: Create Order
layout: ../../layouts/MainLayout.astro
---

## Request

**Url**: [[baseUrl]](/en/variables)/v1/order/create

**Method**: POST

**Content-Type**: application/json

**Request body**:

| Parameter    | Type   | Description                                                                       |
| ------------ | ------ | --------------------------------------------------------------------------------- |
| out_order_no | string | Order number (customized by merchant)）                                           |
| pay_chain    | string | Blockchain description (specify tron)                                             |
| pay_token    | string | Payment currency contract (specified USDT: TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t)    |
| pay_amount   | string | Payment amount (no need to bring currency precision, such as: 1.2)                |
| notify       | string | Payment success notification address, the system sends a POST request to this URL |
| signature    | string | The data after the above fields are signed with the private key.([Signature guide ](/en/signOrderJavascript))          |
| pub_key      | string | public key used for  signing                                                       |

**Response body**：

| Filed            | Description                           |
| --------------- | ------------------------------ |
| **deadline**    | Order expiration time (specified by the system background) |
| **rec_address** | Randomly generated temporary payment address         |
| out_order_no    | order number                         |
| rec_chain       | Blockchain description                     |
| pay_token       | Payment currency contract                   |
| pay_amount      | Payment amount (without currency precision)     |
| uuid            | order unique number                   |

## Example

### Parameter

**The important thing is said three times**："Pay attention to the order in which the parameters are passed in when generating the signature", "Pay attention to the order in which the parameters are passed in when generating the signature", "Pay attention to the order in which the parameters are passed in when generating the signature"

The order is: order number, blockchain, currency contract, payment amount, notification callback address

```json
{
  "out_order_no": "1648198131969",
  "pay_chain": "tron",
  "pay_token": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  "pay_amount": "0.3",
  "notify": "http://localhost",
  "signature": "0x3eeb1f57fad2c78b2115c84cefac747fa75578e56f35aa11b0888fc53129be6c272ae826051a84d91b9080e4479d36d6f02d6380189ff2bb1d1cc2f57fac8ea11c",
  "pub_key": "0x2143d11B31b319C008F59c2D967eBF0E5ad2791d"
}
```

### Response

```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "uuid": "b2f3cc6f-c528-462b-9a9e-fa00cb026892",
    "out_order_no": "1648198131969",
    "rec_chain": "tron",
    "pay_token": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
    "rec_address": "THd32LdWEjRRtPr87rrcQn6H8g7MQJ2Mqy",
    "deadline": 1648200176,
    "pay_amount": "0.3",
    "pay_result": "normal",
    "sign_addr": "0x2143d11B31b319C008F59c2D967eBF0E5ad2791d"
  }
}
```
