const cloudHelper = require('../../../../../helper/cloud_helper.js');
const pageHelper = require('../../../../../helper/page_helper.js');
const timeHelper = require('../../../../../helper/time_helper.js'); 
const PassportBiz = require('../../../../../comm/biz/passport_biz.js'); 
const PublicBiz = require('../../../../../comm/biz/public_biz.js');

Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		cur: 'content',
		isLoad: false,
		day: timeHelper.time('Y-M-D'),
		activity: [],
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: async function (options) {
		//ProjectBiz.initPage(this);

		if (!pageHelper.getOptions(this, options)) return;
		this._loadDetail();

	},

	_loadDetail: async function () {
		let id = this.data.id;
		if (!id) return;

		let params = {
			id,
		};
		let opt = {
			title: 'bar'
		};
		let enroll = await cloudHelper.callCloudData('enroll/view', params, opt);
		if (!enroll) {
			this.setData({
				isLoad: null
			})
			return;
		}

		this.setData({
			isLoad: true,
			enroll,
			activity: enroll.activity
		});

	},

	bindJoinDayTap: async function (e) {
		let day = pageHelper.dataset(e, 'day');
		let params = {
			id:this.data.id,
			day
		};
		let opt = {
			title: '加载中'
		};
		let activity = await cloudHelper.callCloudData('enroll/join_day', params, opt);

		this.setData({
			day,
			activity
		})

	},
	bindCurTap: function (e) {
		let cur = pageHelper.dataset(e, 'cur');
		this.setData({ cur });
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () { },

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () { },

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () { },

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () { },

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: async function () {
		await this._loadDetail();
		wx.stopPullDownRefresh();
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () { },

	bindJoinTap: async function (e) {
		if (!await PassportBiz.loginMustCancelWin(this)) return;

		try {
			let opts = {
				title: '打卡中'
			}
			let params = {
				enrollId: this.data.id,
				forms: []
			}
			await cloudHelper.callCloudSumbit('enroll/join', params, opts).then(res => {
				let cb = async () => {
					PublicBiz.removeCacheList('my_enroll_user'); 
					await this._loadDetail();
				}
				pageHelper.showSuccToast('打卡成功', 1500, cb);
			})
		} catch (err) {
			console.log(err);
		};
	},


	url: function (e) {
		pageHelper.url(e, this);
	},


	onPageScroll: function (e) {
		// 回页首按钮
		pageHelper.showTopBtn(e, this);

	},

	onShareAppMessage: function (res) {
		return {
			title: this.data.enroll.ENROLL_TITLE,
			imageUrl: this.data.enroll.ENROLL_OBJ.cover[0]
		}
	}
})