---
title: Cashier website
description: Cashier website
layout: ../../layouts/MainLayout.astro
---

## Cashier website

The test tool mentioned in the previous section has a sample cashier, the source code is [here](https://github.com/nulls-network/dpay-tron-checks) , development is available for reference.
  
#### Refer to the cashier

**Example code**：

```javascript
const ChecksSiteHref = "https://debug-checks.cpay.network";
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

#### URL example
<p style="word-break: break-all;">https://debug-checks.cpay.network/?pay_token=TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t&deadline=1653034652&pay_amount=1.22&rec_address=TErPcWhdsi6asQ65MfGU545U7EVo74MF5L&rec_chain=tron&uuid=659354b8-c427-4e7f-9623-8cebe3e7f41c&out_order_no=20220520154651</p>


#### Jump page

![result](/pay-en.png)


