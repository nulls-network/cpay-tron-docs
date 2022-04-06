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

| Parameter        | Type   | Description                                                                     |
| ---------------- | ------ | ------------------------------------------------------------------------------- |
| merchant_address | string | Merchant wallet public key (hex format, such as 0x669a…5D772)                   |
| user_address     | string | User wallet address (base58 format, such as TLjg42ZBsEU161bBYorRR9yfve8EKTcZL9) |
| notify           | string | Same as order notify, notification callback URL                                 |
| chain_name       | string | Specify string 'tron'                                                           |
| signature        | string | The above fields are signed with the private key                                |

**Response body**：

| Filed            | Description          |
| ---------------- | -------------------- |
| merchant_address | Merchant address             |
| user_address     | User address             |
| rec_address      | The user's bound payment address |
| uuid             | Unique number             |

## Example

### Request body

```json
{
  "merchant_address": "0x2143d11B31b319C008F59c2D967eBF0E5ad2791d",
  "user_address": "TLjg42ZBsEU161bBYorRR9yfve8EKTcZL9",
  "notify": "https://test-notify.vercel.app/api/index",
  "chain_name": "tron",
  "signature": "0xf9fd2dfdc6b1a162a2c371355a86350a8ac7c935514b0b939cd1e583757eaa7a10642c10cf1186d34390f0d816d7ba87e7e7c06a7c14c6aad524b921724dc0a51b"
}
```

### Response

```json
{
  "code": 0,
  "message": "ok",
  "data": {
    "merchant_address": "0x2143d11B31b319C008F59c2D967eBF0E5ad2791d",
    "user_address": "TLjg42ZBsEU161bBYorRR9yfve8EKTcZL9",
    "rec_address": "TJNdmSG6Ra1sRK3FbPDKEckRdVSwvnzQQz",
    "uuid": "a86ef090-7960-4322-9cea-46ac17d90eba"
  }
}
```

## Testing

### 1.Sign（Using integration service）

![sign](/sign-bindAddress.png)

### 2.Call api

![sign-bind](/bindAddress.png)

### 3.Recharge notification

![notify-bind](/notify-bindAddress.png)
