---
title: 查询提现结果
description: 查询提现结果
layout: ../../layouts/MainLayout.astro
---

## 接口说明

**请求地址**: [[baseUrl]](/zh-CN/config)/v1/withdraw/[txHash]

**请求方法**: Get

**请求参数**:

| 参数   | 类型   | 描述                    |
| ------ | ------ | ----------------------- |
| txHash | string | 提现接口返回的 txhash |

**响应体**：

| 字段   | 类型   | 描述                  |
| ------ | ------ | --------------------- |
| status | string | 'success' 或 ‘paying’ |

## 请求示例

### 请求体

```
  https://api-v1.cpay.network/v1/withdraw/0xc373a0c1de3d876ea089112689b3aad290a587b4f5095a3b1cd1bbb1089e6373
```

### 请求响应

```json
{ 
  "code": 0,
  "message": "ok",
  "data": { "status": "paying" }
}
```
