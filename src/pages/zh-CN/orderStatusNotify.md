---
title: 后端通知回调
description: 后端通知回调
layout: ../../layouts/MainLayout.astro
---

## 说明

1.在创建订单时所填的 notify 字段，即是订单在支付成功时的回调通知 URL。

2.使用 POST 方式调用您在创建订单时所填的 notify url，并在请求体 body 中携带订单详情 json 数据。

## 通知示例

```json
{
  "uuid": "8d59ea74-f73d-42e8-9aab-1bdac04eb030",
  "out_order_no": "1648173778190",
  "amount": "0.01",
  "amount_hex": "10000",
  "pay_result": "success",
  "sign": "0xaa52913c83e7c98f8fd980fbedf7e9a14c9d63b45fed14dce8c1686a0ae8e3424e3c7f0a6dee2d3c27a11676f938e74266b6f9f7ff9faabe85e6612ae6407ca01c"
}
```

## 字段说明

| 字段         | 描述     |
| ------------ | -------- |
| uuid         | 订单uuid |
| out_order_no | 订单编号 |
| amount       | 订单金额（不带精度） |
| amount_hex   | 订单金额（带币种精度） |
| pay_result   | 支付结果（通知） |
| sign         | 平台对订单签名 |


系统会使用固定私钥对订单详情内容进行签名，商户可以通过我们提供的签名集成服务，进行 recover 验签，可以解出来的公钥地址为 0x8A03fDe2D906217DD9D2ae26F66ec5D9635945b7 ，即说明订单内容没有被篡改过。

签名的参数顺序为：uuid，out_order_no，amount，amount_hex，pay_result


## 测试示例

### 1.生成订单

示例中 notify url 为测试所用的接口，打印出请求 body 日志
https://test-notify.vercel.app/api/index

![order-notify](/order-notify.png)

### 2.支付成功

![checks-notify](/checks-notify.png)

### 3.notify 回调

![notify](/notify.png)

### 4.notify 订单验签

使用集成服务，验证订单 sign 签名，解出系统指定的公钥为 0x8a03fde2d906217dd9d2ae26f66ec5d9635945b7

![recover-notify](/recover-notify.png)
