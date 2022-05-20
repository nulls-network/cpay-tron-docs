---
title: 收银台展示
description: 收银台展示
layout: ../../layouts/MainLayout.astro
---

## 收银台展示
  
在上一节中提到的测试工具有个示例收银台，源码[在这里](https://github.com/nulls-network/dpay-tron-checks)，开发可供参考。

#### 参考收银台

**参考代码**：

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

#### URL 拼接示例
<p style="word-break: break-all;">https://debug-checks.cpay.network/?pay_token=TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t&deadline=1653034652&pay_amount=1.22&rec_address=TErPcWhdsi6asQ65MfGU545U7EVo74MF5L&rec_chain=tron&uuid=659354b8-c427-4e7f-9623-8cebe3e7f41c&out_order_no=20220520154651</p>

#### 跳转页面

![收银台结果](/pay.png)


