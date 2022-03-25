export const SITE = {
	title: 'CPay system',
	description: 'A pay system in tron chain',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt: 'astro logo on a starry expanse of space,' + ' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	// English: 'en',
	chinesse: 'zh-CN'
};

export const ApiUrl = 'https://api-tron-v1.dpay.systems'

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
	'zh-CN': [
		{ text: '简介', header: true },
		{ text: '项目介绍', link: 'zh-CN/intro' },


		{ text: '商户接入指南', header: true },
		{ text: '指引', link: 'zh-CN/guide' },
		{ text: '配置', link: 'zh-CN/config' },
		{ text: '使用metamask钱包', link: 'zh-CN/useWallet' },

		{ text: '1.订单签名', header: true },
		{ text: '1.1 集成服务(推荐)', sub: true, link: 'zh-CN/signOrderService' },
		{ text: '1.2 订单签名(JS)', sub: true, link: 'zh-CN/signOrderJavascript' },

		{ text: '2.1 订单说明', header: true, link: 'zh-CN/aboutOrder' },

		{ text: '3.收款', header: true },
		{ text: '3.1 订单收款', link: 'zh-CN/aboutChecks' },
		{ text: '3.2 用户固定收款地址', link: 'zh-CN/aboutBindAddress' },
		{ text: '3.3 示例收银台', link: 'zh-CN/checksOrder' },

		{ text: '4.订单状态', header: true },
		{ text: '4.1 前端监听订单状态', link: 'zh-CN/orderStatusFrontend' },
		{ text: '4.2 后端订单通知回调', link: 'zh-CN/orderStatusNotify' },
		{ text: '4.3 后端充值通知回调', link: 'zh-CN/bindOrderNotify' },

		{ text: '5.提现说明', header: true, link: 'zh-CN/aboutWithdraw' },


		{ text: '6.API', header: true },
		{ text: '6.1 创建订单', link: 'zh-CN/createOrder' },
		{ text: '6.2 轮询订单状态', link: 'zh-CN/queryOrderStatus' },
		{ text: '6.3 查询商户余额', link: 'zh-CN/queryAssets' },
		{ text: '6.4 提现接口', link: 'zh-CN/doWithdraw' },
		{ text: '6.5 绑定用户收款地址(充值)', link: 'zh-CN/bindReceiveAddress' },
		{ text: '6.5 汇率工具', link: 'zh-CN/exchangeFee' },
	]
};
