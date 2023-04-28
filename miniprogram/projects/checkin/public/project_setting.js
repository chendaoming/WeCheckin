module.exports = { //checkin
	PROJECT_COLOR: '#fb454c',
	NAV_COLOR: '#000000',
	NAV_BG: '#ffffff',


	// setup
	SETUP_CONTENT_ITEMS: [
		{ title: '关于我们', key: 'SETUP_CONTENT_ABOUT' },
	],

	// 用户
	USER_REG_CHECK: false,
	USER_FIELDS: [
	],
	USER_CHECK_FORM: {
		name: 'formName|must|string|min:1|max:30|name=昵称',
		mobile: 'formMobile|must|mobile|name=手机',
		pic: 'formPic|must|string|name=头像',
		forms: 'formForms|array'
	},


	NEWS_NAME: '通知公告',
	NEWS_CATE: [
		{ id: 1, title: '通知公告', style: 'leftbig1' },

	],
	NEWS_FIELDS: [
	],

	ENROLL_NAME: '打卡',
	ENROLL_CATE: [
		{ id: 1, title: '学习' },
		{ id: 2, title: '兴趣' },
		{ id: 3, title: '生活' },
		{ id: 4, title: '运动' },
		{ id: 5, title: '工作' },
	],
	ENROLL_FIELDS: [
		{ mark: 'cover', title: '封面图片', type: 'image', len: 1, must: true },
		{ mark: 'vouch', title: '首页推荐图片', type: 'image', len: 1, must: false },
		{ mark: 'desc', title: '简介', type: 'text', max: 50, must: true },
		{ mark: 'content', title: '详情介绍', type: 'content', must: true },

	],
	ENROLL_JOIN_FIELDS: [

	],

}