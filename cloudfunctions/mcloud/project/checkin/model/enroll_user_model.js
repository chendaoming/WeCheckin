/**
 * Notes: 打卡表格实体
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY cclinux0730 (wechat)
 * Date: 2022-07-04 19:20:00 
 */


const BaseProjectModel = require('./base_project_model.js');

class EnrollUserModel extends BaseProjectModel {

}

// 集合名
EnrollUserModel.CL = BaseProjectModel.C('enroll_user');

EnrollUserModel.DB_STRUCTURE = {
	_pid: 'string|true',
	ENROLL_USER_ID: 'string|true',
	ENROLL_USER_ENROLL_ID: 'string|true|comment=打卡PK',

	ENROLL_USER_MINI_OPENID: 'string|true|comment=用户ID',

	ENROLL_USER_JOIN_CNT: 'int|true|default=0|comment=打卡次数',
	ENROLL_USER_DAY_CNT: 'int|true|default=0|comment=打卡天数',

	ENROLL_USER_LAST_DAY: 'string|false|comment=最近打卡日期', 

	ENROLL_USER_ADD_TIME: 'int|true',
	ENROLL_USER_EDIT_TIME: 'int|true',
	ENROLL_USER_ADD_IP: 'string|false',
	ENROLL_USER_EDIT_IP: 'string|false',
};

// 字段前缀
EnrollUserModel.FIELD_PREFIX = "ENROLL_USER_";

/**
 * 状态   1=成功 
 */
EnrollUserModel.STATUS = {
	SUCC: 1,
};

EnrollUserModel.STATUS_DESC = {
	SUCC: '成功',
};

module.exports = EnrollUserModel;