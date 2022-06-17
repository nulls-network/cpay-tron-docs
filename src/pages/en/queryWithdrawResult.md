---
title: Query withdrawal results
description: Query withdrawal results
layout: ../../layouts/MainLayout.astro
---

## Request

**Url**: [[baseUrl]](/zh-CN/variables)/v1/withdraw/[txHash]

**Method**: Get

**Request body**:

| Parameter   | Type   | Description                    |
| ------ | ------ | ----------------------- |
| txHash | string | The txhash returned by the withdrawal interface |

**Response body**：

| Filed   | Type   | Description                  |
| ------ | ------ | --------------------- |
| status | string | 'success' or 'paying' or 'failed' |

## Example

### Example request

```
  https://api-v1.cpay.network/v1/withdraw/0xc373a0c1de3d876ea089112689b3aad290a587b4f5095a3b1cd1bbb1089e6373
```

### Response

```json
{ 
  "code": 0,
  "message": "ok",
  "data": { "status": "paying" }
}
```
