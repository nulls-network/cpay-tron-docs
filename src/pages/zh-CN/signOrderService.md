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

URL: [](/zh-CN/config)/v1/order/create

![create](/order.png)


