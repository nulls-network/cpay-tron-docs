---
title: 后端通知回调
description: 后端通知回调
layout: ../../layouts/MainLayout.astro
---

## 说明

1.在创建订单时所填的 notify 字段，即是订单在支付成功时的回调通知 URL。

2.使用 POST 方式调用您在创建订单时所填的 notify url，并在请求体 body 中携带订单详情 json 数据。

3.签名字段顺序: out_order_no,uuid,merchant_address,type,amount,amount_hex,got_amount,pay_result,token

4.解出系统指定的公钥: 0x8a03fde2d906217dd9d2ae26f66ec5d9635945b7

## 通知示例

```json
{
	"out_order_no": "25927449_20220610155339_461894",
	"uuid": "9c9406a8-f5bb-4a2d-a69a-38b7b70ed804",
	"merchant_address": "0xa22433e8fe29490d0770A67eC507F38CE67F1590",
	"type": "order",
	"amount": "20.0000",
	"amount_hex": "20000000",
	"got_amount": "20.0000",
	"pay_result": "success",
	"token": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
	"sign": "0xfd00c5cb7fc5091d73f19260595d91df118ab40f6820d5ea06d7bb92c50ce39a18d87affd77c73110ff62a16721d75836d1b2888c4df50f4b9b0a97d1b7eac561b"
}
```
