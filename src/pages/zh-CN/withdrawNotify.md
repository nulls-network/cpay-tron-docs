---
title: 提现回调通知
description: 提现回调通知
layout: ../../layouts/MainLayout.astro
---

## 接口说明

CPay 通过提现通知接口将用户提现成功消息通知给商户

## 注意

1.同样的通知可能会多次发送给商户系统。商户系统必须能够正确处理重复的通知。 
推荐的做法是，

&emsp;&emsp;1).当商户系统收到通知进行处理时，先检查对应业务数据的状态，并判断该通知是否已经处理。

&emsp;&emsp;2).如果未处理，则再进行处理；如果已处理，则直接返回结果成功。

&emsp;&emsp;3).在对业务数据进行状态检查和处理之前，要采用数据锁进行并发控制，以避免函数重入造成的数据混乱。

2.如果在所有通知频率后没有收到CPay回调，商户应调用查询订单接口确认订单状态。

### 接口说明

请求方式：POST

回调URL：该链接是通过[提现接口](/zh-CN/doWithdraw_v2)中的请求参数“notify_url”来设置的


### 通知规则

商户申请提现完成后，CPay把相关提现结果和用户信息发送给商户，商户需要接收处理该消息，并返回应答 http状态码200。

对后台通知交互时，如果CPay收到商户的应答不符合规范或超时，CPay认为通知失败，CPay会通过一定的策略定期重新发起通知，尽可能提高通知的成功率，CPay不保证通知最终能成功。（通知频率5s/30s/1m/30m/60m/3h/12h/24h/36h/48h）

## 通知报文

支付结果通知是以POST 方法访问商户设置的通知url，通知的数据以JSON 格式通过请求主体（BODY）传输。通知的数据包括了提现结果的签名

## 参数验签

1.[验签可参考](/zh-CN/signOrderJavascript) 

2.签名的参数顺序为 uuid,merchant_address,withdrar_address_bas58,withdrar_address_hex,to_chain,token,token_name
,amount,fee,actual_amount,status

3.解出系统指定的公钥: 0x8a03fde2d906217dd9d2ae26f66ec5d9635945b7

## 通知参数

| 参数         | 类型   | 描述                                                                     |
| ------------ | ------ | ------------------------------------------------------------------------ |
| uuid | string | 提现号（由商家自定义）                                                   |
| merchant_address    | string | 商户地址                                                 |
| withdrar_address_bas58    | string | 提现到账用户的hex 地址           |
| withdrar_address_hex   | string | 提现到账用户的base58地址                                      |
| to_chain       | string | 提现所到的链                          |
| token    | string | 提现的币种 |
| token_name      | string | 提现币种的名称                                                           |
| amount      | string | 提现金额           |
| fee      | string | 手续费                                                           |
| actual_amount      | string | 实际到账金额                                                           |
| status      | string | ‘Y’:成功到账 ‘N’:还未到账                                                           |
| sign      | string | 参数签名 需验证签名是否是平台发出的                                                           |

## 通知 body 示例

```json
{
  "uuid": "9e2e1f3b-1f15-4ac7-b37f-2a92ff0f5e4f",
  "merchant_address": "0x17519874d6b1F84B4970E4fdF791Ef80Ab501A3f",
  "withdrar_address_bas58": "TXcwjjSca4qAmCAw89ULaVhuySU5g2NkM1",
  "withdrar_address_hex": "0xeD7dB4bff619C820642C6B1B7562128F6e9185BD",
  "to_chain": "Tron",
  "token": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  "token_name": "USDT",
  "amount": "20.979",
  "fee": "0.5",
  "actual_amount": "20.479",
  "status": "Y",
  "sign": "0xd872e6788c6885abfbc5a3d7d63715c5659ad12ef27e424e1d7316ba09265e1664ef2217c0953a633a310cf94a586f5351ee167ea3fe25be3fb8faf1fdf1603a1c"
}
```