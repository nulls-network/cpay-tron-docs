---
title: Order status polling
description: Order status polling
layout: ../../layouts/MainLayout.astro
---

## Request

**Url**: [[baseUrl]](/en/variables)/v1/order/$uuid

**Parameter**: uuid （from generate order response）

**Method**: GET

**Response body**：

| Filed          | Description                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| **pay_result** | Order status ('normal','success','faild'）                                  |
| sign_addr      | Order signing address (ie the public key of the merchant to sign the order) |
| deadline       | Order expiration time (specified by the system background)                  |
| rec_address    | Randomly generated temporary payment address                                |
| out_order_no   | order number                                                                |
| rec_chain      | Blockchain description                                                      |
| pay_token      | Payment currency contract                                                   |
| pay_amount     | Payment amount (without currency precision)                                 |
| uuid           | Order unique number                                                         |

## Example

### Parameter

uuid: 20c3b1f6-3029-42b9-838c-4841e2686ade

[[baseUrl]](/en/variables)/api/v1/order/20c3b1f6-3029-42b9-838c-4841e2686ade

### Response

```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "uuid": "20c3b1f6-3029-42b9-838c-4841e2686ade",
    "out_order_no": "1648198831086",
    "rec_chain": "tron",
    "pay_token": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
    "rec_address": "TYeBsrLJFV2RFMoGgxN3BWKmKjRvxmoqBL",
    "deadline": 1648200638,
    "pay_amount": "0.1",
    "pay_result": "normal",
    "sign_addr": "0x2143d11B31b319C008F59c2D967eBF0E5ad2791d"
  }
}
```
