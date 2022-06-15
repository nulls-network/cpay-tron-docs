---
title: 集成服务签名
description: 集成服务签名
layout: ../../layouts/MainLayout.astro
---

## 说明
签名算法采用区块链广泛采用的椭圆曲线算法，为了适应不同编程语言的对接，提供了一个由rust实现订单签名的http服务。**请注意，由于签名会使用到钱包私钥，请在内网运行该服务**。

## 工具下载
根据您当前的操作系统，选择对应的文件下载，[下载地址](https://github.com/nulls-network/sign-order-service/releases)

## 使用示例（macOs M1）
### 1.下载对应文件 MAC_ARM64

### 2.增加执行权限
```code
sudo chmod a+x ./MAC_ARM64
```

### 3.运行
```code
#可指定端口参数，默认8080
./MAC_ARM64 8080
```

## 测试  
该工具还可以用于其他需要签名的场景，如：[绑定用户收款地址](/zh-CN/bindReceiveAddress) 、[提现](/zh-CN/doWithdraw)

### 订单签名
data为订单参数，确保传入顺序一致,依次为：**订单号、区块链、币种合约、支付金额、通知回调地址**  

![sign](/sign.png)

### 订单验签
返回签名所使用的钱包账户
    
![recover](/recover.png)

### 创建订单

URL: /v1/order/create

[签名方式](/zh-CN/signOrderJavascript)

#### 版本1.0

该版本的签名方式采用的signDigest

```json
{
	"out_order_no": "20220615172134",
	"pay_chain": "tron",
	"pay_token": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
	"pay_amount": "0.01",
	"signature": "0x9d83b3ab9478fa30818cdf630f57c88be53f24bcca9fb9b2602b83653437cd5b52d9d8e4ed6b9f423a61667fb6177bf0876066b83d89c282e5fdc7beef9de82c1b",
	"notify": "https://test-notify.vercel.app/api/index",
	"pub_key": "0x2143d11B31b319C008F59c2D967eBF0E5ad2791d"
}
```

#### 版本1.1

该版本的签名方式采用的signMessage

```json
{
	"out_order_no": "20220615172134",
	"pay_chain": "tron",
	"pay_token": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
	"pay_amount": "0.01",
	"signature": "0x9d83b3ab9478fa30818cdf630f57c88be53f24bcca9fb9b2602b83653437cd5b52d9d8e4ed6b9f423a61667fb6177bf0876066b83d89c282e5fdc7beef9de82c1b",
	"notify": "https://test-notify.vercel.app/api/index",
	"pub_key": "0x2143d11B31b319C008F59c2D967eBF0E5ad2791d",
	"version": "1.1"
}
```

