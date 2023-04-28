/**
 * Notes: 全局/首页模块业务逻辑
 * Date: 2021-03-15 04:00:00 
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY cclinux0730 (wechat)
 */

const BaseProjectService = require('./base_project_service.js');
const setupUtil = require('../../../framework/utils/setup/setup_util.js'); 
const EnrollModel = require('../model/enroll_model.js');

class HomeService extends BaseProjectService {

	async getSetup(key) {
		return await setupUtil.get(key);
	}

	/**首页列表 */
	async getHomeList() {
		let fields = 'ENROLL_TITLE,ENROLL_CATE_NAME,ENROLL_USER_CNT,ENROLL_USER_LIST,ENROLL_OBJ.cover,ENROLL_OBJ.vouch';
		let where = {
			ENROLL_STATUS: 1
		}
		let newList = await EnrollModel.getAll(where, fields, { 'ENROLL_ADD_TIME': 'desc' }, 10);

		let vouchList = await EnrollModel.getAll(where, fields, { 'ENROLL_VOUCH': 'desc', 'ENROLL_ADD_TIME': 'desc' }, 10);

		let hotList = await EnrollModel.getAll(where, fields, { 'ENROLL_USER_CNT': 'desc', 'ENROLL_ADD_TIME': 'desc' }, 10);

		return { newList, hotList, vouchList }

	}
}

module.exports = HomeService;