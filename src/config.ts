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

		{ text: '第一步：订单签名', header: true },
		{ text: '集成服务(推荐)', sub: true, link: 'zh-CN/signOrderService' },
		{ text: '订单签名(JS)', sub: true, link: 'zh-CN/signOrderJavascript' },

		{ text: '第二步：创建订单',header:true},
		{ text: '关于订单', link: 'zh-CN/aboutOrder' },
		{ text: '创建订单', link: 'zh-CN/createOrder' },

		{ text: '第三步：展示收银台', link: 'zh-CN/checksOrder' },

		{ text: '第四步：监听订单状态', link: 'zh-CN/listenOrder' },
		
	]
};
