---
title: Order payment notification
description: Order payment notification
layout: ../../layouts/MainLayout.astro
---

## Illustrate

1. The notify field filled in when creating an order is the callback notification URL when the order is successfully paid.

2. Use the POST method to call the notify url you filled in when creating the order, and carry the order details json data in the request body.

## Notification content example

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


## Test example

### 1.Generate an order

In the example, notify url is the interface used for testing, and print out the request body log
https://test-notify.vercel.app/api/index

![order-notify](/order-notify.png)

### 2.The payment is successful

![checks-notify](/checks-notify.png)

### 3.Notify callback

![notify](/notify.png)

### 4.Notify order verification

Use the integrated service to verify the order sign signature, and solve the public key specified by the system as 0x8a03fde2d906217dd9d2ae26f66ec5d9635945b7

![recover-notify](/recover-notify.png)
