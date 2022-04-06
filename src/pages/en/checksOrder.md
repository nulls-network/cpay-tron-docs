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

#### Jump page

![result](/checks-demo.png)


