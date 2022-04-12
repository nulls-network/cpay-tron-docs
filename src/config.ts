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
		{ text: '指引', header: true },
		{ text: '业务说明', link: 'zh-CN/projectGuide' },
		{ text: '收费说明', link: 'zh-CN/aboutFee' },
		{ text: '商户对接流程', link: 'zh-CN/cooperGuide' },
		{ text: '产品网站', link: 'zh-CN/config' },


		{ text: '技术对接', header: true },
		{ text: '概览', link: 'zh-CN/guide' },
		{ text: '使用metamask钱包', link: 'zh-CN/useWallet' },
		{ text: '术语释义', link: 'zh-CN/theTerms' },

		{ text: '订单的运作', link: 'zh-CN/aboutOrder' },
		{ text: '生成订单签名-使用集成服务', link: 'zh-CN/signOrderService' },
		{ text: '生成订单签名-使用JS', link: 'zh-CN/signOrderJavascript' },
		{ text: '收款对接说明', link: 'zh-CN/aboutChecks' },
		{ text: '绑定固定收款地址', link: 'zh-CN/aboutBindAddress' },
		{ text: '订单状态轮询', link: 'zh-CN/orderStatusFrontend' },
		{ text: '订单支付通知', link: 'zh-CN/orderStatusNotify' },
		{ text: '固定地址充值通知', link: 'zh-CN/bindOrderNotify' },
		{ text: '示例收银台', link: 'zh-CN/checksOrder' },
		{ text: '提现说明', link: 'zh-CN/aboutWithdraw' },


		{ text: 'API接口', header: true },
		{ text: '全局变量', link: 'zh-CN/variables' },
		{ text: '创建订单', link: 'zh-CN/createOrder' },
		{ text: '轮询订单状态', link: 'zh-CN/queryOrderStatus' },
		{ text: '查询商户余额', link: 'zh-CN/queryAssets' },
		{ text: '提现接口', link: 'zh-CN/doWithdraw' },
		{ text: '查询提现结果', link: 'zh-CN/queryWithdrawResult' },
		{ text: '绑定用户收款地址(充值)', link: 'zh-CN/bindReceiveAddress' },
		{ text: '汇率工具', link: 'zh-CN/exchangeFee' },
	],
	'en':[
		{ text: 'Guide', header: true },
		{ text: 'Business description', link: 'en/projectGuide' },
		{ text: 'About fee', link: 'en/aboutFee' },
		{ text: 'Docking process', link: 'en/cooperGuide' },
		{ text: 'Product of website', link: 'en/config' },


		{ text: 'Technical guide', header: true },
		{ text: 'Overview', link: 'en/guide' },
		{ text: 'Use metamask wallet', link: 'en/useWallet' },
		{ text: 'Definition of terms', link: 'en/theTerms' },

		{ text: 'Operation of order', link: 'en/aboutOrder' },
		{ text: 'Sign order using integration', link: 'en/signOrderService' },
		{ text: 'Sign order using javascript', link: 'en/signOrderJavascript' },
		{ text: 'Order receive', link: 'en/aboutChecks' },
		{ text: 'Bind a fixd payment address', link: 'en/aboutBindAddress' },
		{ text: 'Order status polling', link: 'en/orderStatusFrontend' },
		{ text: 'Order payment notification', link: 'en/orderStatusNotify' },
		{ text: 'Recharge notification', link: 'en/bindOrderNotify' },
		{ text: 'Example cashier', link: 'en/checksOrder' },
		{ text: 'Withdraw', link: 'en/aboutWithdraw' },

		{ text: 'API interface', header: true },
		{ text: 'Global variables', link: 'en/variables' },
		{ text: 'Create order', link: 'en/createOrder' },
		{ text: 'Poll order status', link: 'en/queryOrderStatus' },
		{ text: 'Query merchant balance', link: 'en/queryAssets' },
		{ text: 'Withdraw', link: 'en/doWithdraw' },
		{ text: 'Withdraw result', link: 'en/queryWithdrawResult' },
		{ text: "Bind payment address", link: 'en/bindReceiveAddress' },
		{ text: "Exchage rate tool", link: 'en/exchangeFee' },
	]
};
