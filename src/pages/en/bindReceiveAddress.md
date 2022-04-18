---
title: Bind payment address
description: Bind payment address
layout: ../../layouts/MainLayout.astro
---

## Request

**Url**: [[baseUrl]](/en/variables)/v1/bing/merchantBingAddress

**Method**: POST

**content-type**: application/json

**Request body**:

| Parameter        | Type   | Description                                                   |
| ---------------- | ------ | ------------------------------------------------------------- |
| merchant_address | string | Merchant wallet public key (hex format, such as 0x669a…5D772) |
| user_id          | string | User ID                                                       |
| notify           | string | Same as order notify, notification callback URL               |
| chain_name       | string | Specify string 'tron'                                         |
| signature        | string | The above fields are signed with the private key              |

**Response body**：

| Filed            | Description                      |
| ---------------- | -------------------------------- |
| merchant_address | Merchant address                 |
| user_id          | User ID                          |
| rec_address      | The user's bound payment address |
| uuid             | Unique number                    |

## Example

### Request body

```json
{
  "merchant_address": "0x2143d11B31b319C008F59c2D967eBF0E5ad2791d",
  "user_id": "QQ1234",
  "chain_name": "tron",
  "notify": "https://test-notify.vercel.app/api/index",
  "signature": "0x184b1e0301d4298adbcd68d4e198fb0af254e1978515d03972bced82493c13024c887843e2cad32b0772ef0429dee987bf5ebe76eb00d1bc6b2630e64b0392d81c"
}
```

### Response

```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "merchant_address": "0x2143d11B31b319C008F59c2D967eBF0E5ad2791d",
    "user_id": "QQ1234",
    "rec_address": "TT7o88adWWCEzn9e5JMknFy9z7smtMd2QA",
    "uuid": "8070687a-eb54-4f54-a24f-51bcebb7a1f6"
  }
}
```

## Testing

### 1.Use testing tool

![sign](/bind-api-en.png)

### 2.Transfer

![sign-bind](/bind-transfer.png)

### 3.Recharge notification

![notify-bind](/bind-notice.png)
