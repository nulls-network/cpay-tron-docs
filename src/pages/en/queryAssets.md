---
title: Query merchant balance
description: Query merchant balance
layout: ../../layouts/MainLayout.astro
---

## Request

**Url**: [[baseUrl]](/en/variables)/v1/merchant/balanceOf

**Method**: POST

**content-type**: application/json

**Request body**:

| Parameter     | type   | Description                                                                    |
| -------- | ------ | ----------------------------------------------------------------------- |
| merchant | string | Merchant wallet address (hex format, such as 0x669a9457817Ae9A24527E77C9a4629A4bF65D772) |
| chain    | string | Specify tron                                                  |
| token    | string | Specify TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t, which is the main network USDT                   |

**Response body**：

| Filed   | Description                                 |
| ------ | ------------------------------------ |
| total  | Total balance (with currency precision)                   |
| freeze | Frozen balance (unsettled balance) (with currency precision) |

## Example

### Request body

```json
{
  "merchant": "0x2143d11B31b319C008F59c2D967eBF0E5ad2791d",
  "chain": "tron",
  "token": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"
}
```

### Response

```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "total": "379000",
    "freeze": "166000"
  }
}
```
