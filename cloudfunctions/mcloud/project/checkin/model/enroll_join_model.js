/**
 * Notes: 打卡表格实体
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY cclinux0730 (wechat)
 * Date: 2022-07-04 19:20:00 
 */


const BaseProjectModel = require('./base_project_model.js');

class EnrollJoinModel extends BaseProjectModel {

}

// 集合名
EnrollJoinModel.CL = BaseProjectModel.C('enroll_join');

EnrollJoinModel.DB_STRUCTURE = {
	_pid: 'string|true',
	ENROLL_JOIN_ID: 'string|true',
	ENROLL_JOIN_ENROLL_ID: 'string|true|comment=打卡PK',

	ENROLL_JOIN_USER_ID: 'string|true|comment=用户ID',
	ENROLL_JOIN_DAY: 'string|true|comment=日期',
	ENROLL_JOIN_FORMS: 'array|true|default=[]|comment=表单',

	ENROLL_JOIN_STATUS: 'int|true|default=1|comment=状态 1=成功', 

	ENROLL_JOIN_ADD_TIME: 'int|true',
	ENROLL_JOIN_EDIT_TIME: 'int|true',
	ENROLL_JOIN_ADD_IP: 'string|false',
	ENROLL_JOIN_EDIT_IP: 'string|false',
};

// 字段前缀
EnrollJoinModel.FIELD_PREFIX = "ENROLL_JOIN_";

/**
 * 状态   1=成功 
 */
EnrollJoinModel.STATUS = {
	SUCC: 1,
};

EnrollJoinModel.STATUS_DESC = {
	SUCC: '成功',
};

module.exports = EnrollJoinModel;