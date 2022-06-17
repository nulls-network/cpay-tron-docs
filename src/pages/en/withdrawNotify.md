---
title: Withdrawal Callback Notification
description: Withdrawal Callback Notification
layout: ../../layouts/MainLayout.astro
---

## Interface Description

CPay Notify the merchant of the successful withdrawal of the user through the withdrawal notification interface

## Notice

1.The same notification may be sent to the merchant system multiple times. Merchant systems must be able to properly handle duplicate notifications.
The recommended practice is,

&emsp;&emsp;1).When the merchant system receives the notification for processing, it first checks the status of the corresponding business data and determines whether the notification has been processed.

&emsp;&emsp;2).If it has not been processed, it will be processed again; if it has been processed, it will directly return the result of success.

&emsp;&emsp;3).Before state checking and processing of business data, data locks should be used for concurrency control to avoid data confusion caused by function reentrancy.

2.If no CPay callback is received after all notification frequencies, the merchant should call the order query interface to confirm the order status.

### Interface Description

Request Method：POST

Callback URL: The link is set through the request parameter "notify_url" in [withdrawal interface](/en/doWithdraw_v2)


### Notification Rules

After the merchant's application for withdrawal is completed, CPay sends the relevant withdrawal result and user information to the merchant. The merchant needs to receive and process the message and return the response http status code 200.

When interacting with background notifications, if CPay receives a response from a merchant that does not meet the specifications or times out, CPay considers the notification to fail, and CPay will periodically re-send the notification through certain strategies to improve the success rate of the notification as much as possible. CPay does not guarantee that the notification will eventually succeed. (Notification frequency 5s/30s/1m/30m/60m/3h/12h/24h/36h/48h)

## Notification Message

The payment result notification is to access the notification url set by the merchant in the POST method, and the notification data is transmitted through the request body (BODY) in JSON format. The notification data includes the signature of the withdrawal result.

## Parameter Verification

1.[Check the signature for reference](/en/signOrderJavascript) 

2.The parameter order of the signature is

 uuid,merchant_address,withdrar_address_bas58,withdrar_address_hex,to_chain,token,token_name
,amount,fee,actual_amount,status

3.Solve the public key specified by the system: 0x8a03fde2d906217dd9d2ae26f66ec5d9635945b7

## Notification Parameters

| Parameter | Type   | Description                                                                                   |
| ------------ | ------ | ------------------------------------------------------------------------ |
| uuid | string | Withdrawal number (customized by the merchant)                                                  |
| merchant_address    | string | merchant address                                                 |
| withdrar_address_bas58    | string | The hex address of the user who has withdrawn to the account           |
| withdrar_address_hex   | string | The base58 address of the user who withdraws to the account                                      |
| to_chain       | string | Chain to withdraw to                         |
| token    | string | Withdrawal currency |
| token_name      | string | The name of the withdrawal currency                                                           |
| amount      | string | Withdrawal Amount           |
| fee      | string | handling fee                                                           |
| actual_amount      | string | actual amount                                                           |
| status      | string | ‘Y’: Successfully credited to the account ‘N’: Not yet credited                                                |
| sign      | string | Parameter signature Need to verify whether the signature is issued by the platform                          |

## Notification Body Example

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