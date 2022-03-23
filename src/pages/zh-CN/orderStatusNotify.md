---
title: 后端通知回调
description: 后端通知回调
layout: ../../layouts/MainLayout.astro
---

##  回调说明
在创建订单时所填的notify字段，即是订单在支付成功时的回调通知URL。

## 调用方式
系统将会使用POST请求方式调用您在创建订单时所填的notify url，并在请求体body中携带订单详情json数据

## 通知内容
### 1.订单详情
包括支付金额、订单号、支付结果
### 2.订单签名（sign字段）
系统会使用固定私钥对订单详情内容进行签名，商户可以通过我们提供的签名集成服务，进行recover验签，可以解出来的公钥地址为 0x8A03fDe2D906217DD9D2ae26F66ec5D9635945b7 ，即说明订单内容没有被篡改过。

签名的参数顺序为：uuid，out_order_no，amount，amount_hex，pay_result

## 调用notify url

**method**: POST

**Content-Type**: application/json

**请求体**：

```json
{
    uuid :  订单唯一编号, 
    out_order_no : 订单号 ,
    amount : 订单金额 ,
    amount_hex : 订单金额精度处理后 ,
    pay_result :  订单状态（'normal','success','faild'）,
    sign: 平台签名数据
}
```

## 测试示例

### 1.生成订单

示例中 notify url 为测试所用的接口，打印出请求body日志
https://test-notify.vercel.app/api/index 

![order-notify](/order-notify.png)

### 2.支付成功

![checks-notify](/checks-notify.png)

### 3.notify回调

![notify](/notify.png)

### 4.notify订单验签

使用集成服务，验证订单sign签名，解出系统指定的公钥为0x8a03fde2d906217dd9d2ae26f66ec5d9635945b7

![recover-notify](/recover-notify.png)