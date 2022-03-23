export const SITE = {
	title: 'DPay system',
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
		{ text: '使用metamask钱包', link: 'zh-CN/other/wallet' },
		// { text: '订单签名算法(javascript)', link: 'zh-CN/other/signOrder' },
		// { text: '订单签名算法(服务端)', link: 'zh-CN/other/signOrder2' },

		{ text: '1.订单签名', header: true },
		{ text: '1.1 集成服务(推荐)', sub: true, link: 'zh-CN/signOrderService' },
		{ text: '1.2 订单签名(JS)', sub: true, link: 'zh-CN/signOrderJavascript' },

		{ text: '2.1 关于订单',header:true, link: 'zh-CN/aboutOrder' },

		{ text: '3.收款', header: true },
		{ text: '3.1 关于收银台', link: 'zh-CN/aboutChecks' },
		{ text: '3.2 示例收银台', link: 'zh-CN/checksOrder' },

		{ text: '4.订单状态', header: true },
		{ text: '4.1 前端收银台监听', link: 'zh-CN/orderStatusChecks' },
		{ text: '4.2 后端通知回调', link: 'zh-CN/orderStatusNotify' },

		{ text: '5.商户后台', header: true },
		{ text: '5.1 关于提现', link: 'zh-CN/aboutWithdraw' },
	

		{ text: '6.API', header: true },
		{ text: '6.1 创建订单', link: 'zh-CN/createOrder' },
		{ text: '6.2 查询订单状态', link: 'zh-CN/queryOrderStatus' },
		{ text: '6.3 查询可提现余额', link: 'zh-CN/queryAssets' },
		{ text: '6.4 查询总余额', link: 'zh-CN/queryTotalAssets' },
		{ text: '6.5 提现接口', link: 'zh-CN/doWithdraw' },
	]
};
