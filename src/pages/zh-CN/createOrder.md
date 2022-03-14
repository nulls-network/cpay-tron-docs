---
title: 创建订单
description: 创建订单
layout: ../../layouts/MainLayout.astro
---

## 生成订单

**请求接口：**

**url**: https://dpay-tron-checks.vercel.app/v1/order/create

**method**: POST

**body**:

| 参数         | 描述                         |
| ------------ | ---------------------------- |
| out_order_no | 订单号（由商家自定义）       |
| pay_chain    | 区块链描述                   |
| pay_token    | 支付币种合约                 |
| pay_amount   | 支付金额（无需带币种精度）   |
| signature    | 以上字段用私钥签名的后的数据 |

**请求响应体**：

| 参数            | 描述                           |
| --------------- | ------------------------------ |
| **deadline**    | 订单过期时间（由系统后台指定） |
| **rec_address** | 随机生成的临时收款地址         |
| out_order_no    | 订单号                         |
| rec_chain       | 区块链描述                     |
| pay_token       | 支付币种合约                   |
| pay_amount      | 支付金额（无需带币种精度）     |
| uuid            | 订单唯一编号                   |

## 跳转收银台

**参考代码**：

```javascript
const ChecksSiteHref = "https://dpay-tron-checks.vercel.app";
const params = new URLSearchParams();
params.append("pay_token", data.pay_token);
params.append("deadline", data.deadline);
params.append("pay_amount", data.pay_amount);
params.append("rec_address", data.rec_address);
params.append("rec_chain", data.rec_chain);
params.append("uuid", data.uuid);
params.append("out_order_no", data.out_order_no);
window.open(`${ChecksSiteHref}/?${params.toString()}`, "_blank");
```

#### 跳转页面

![收银台结果](/checks-demo.png)
