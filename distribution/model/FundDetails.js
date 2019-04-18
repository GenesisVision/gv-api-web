'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Core API v1.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OpenAPI spec version: v1.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _ChartSimple = require('./ChartSimple');

var _ChartSimple2 = _interopRequireDefault(_ChartSimple);

var _DashboardProgramDetails = require('./DashboardProgramDetails');

var _DashboardProgramDetails2 = _interopRequireDefault(_DashboardProgramDetails);

var _FundAssetPercent = require('./FundAssetPercent');

var _FundAssetPercent2 = _interopRequireDefault(_FundAssetPercent);

var _FundDetailsListStatistic = require('./FundDetailsListStatistic');

var _FundDetailsListStatistic2 = _interopRequireDefault(_FundDetailsListStatistic);

var _PersonalFundDetailsFull = require('./PersonalFundDetailsFull');

var _PersonalFundDetailsFull2 = _interopRequireDefault(_PersonalFundDetailsFull);

var _ProfilePublic = require('./ProfilePublic');

var _ProfilePublic2 = _interopRequireDefault(_ProfilePublic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @interface FundDetails
 */

/**
 *
 * @name FundDetails#totalAssetsCount
 * @type {Number}
 */
/**
 *
 * @name FundDetails#topFundAssets
 * @type {[FundAssetPercent]}
 */
/**
 *
 * @name FundDetails#statistic
 * @type {FundDetailsListStatistic}
 */
/**
 *
 * @name FundDetails#personalDetails
 * @type {PersonalFundDetailsFull}
 */
/**
 *
 * @name FundDetails#dashboardAssetsDetails
 * @type {DashboardProgramDetails}
 */
/**
 *
 * @name FundDetails#id
 * @type {String}
 */
/**
 *
 * @name FundDetails#logo
 * @type {String}
 */
/**
 *
 * @name FundDetails#url
 * @type {String}
 */
/**
 *
 * @name FundDetails#color
 * @type {String}
 */
/**
 *
 * @name FundDetails#title
 * @type {String}
 */
/**
 *
 * @name FundDetails#description
 * @type {String}
 */
/**
 *
 * @name FundDetails#status
 * @type {("None"|"Pending"|"ErrorCreating"|"Active"|"Closed"|"Archived"|"ClosedDueToInactivity")}
 */
/**
 *
 * @name FundDetails#creationDate
 * @type {Date}
 */
/**
 *
 * @name FundDetails#manager
 * @type {ProfilePublic}
 */
/**
 *
 * @name FundDetails#chart
 * @type {[ChartSimple]}
 */

var FundDetails = function () {
    function FundDetails() {
        _classCallCheck(this, FundDetails);

        this.totalAssetsCount = undefined;
        this.topFundAssets = undefined;
        this.statistic = undefined;
        this.personalDetails = undefined;
        this.dashboardAssetsDetails = undefined;
        this.id = undefined;
        this.logo = undefined;
        this.url = undefined;
        this.color = undefined;
        this.title = undefined;
        this.description = undefined;
        this.status = undefined;
        this.creationDate = undefined;
        this.manager = undefined;
        this.chart = undefined;
    }

    _createClass(FundDetails, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new FundDetails();

                if (data.hasOwnProperty('totalAssetsCount')) {
                    obj['totalAssetsCount'] = _ApiClient2.default.convertToType(data['totalAssetsCount'], 'Number');
                }
                if (data.hasOwnProperty('topFundAssets')) {
                    obj['topFundAssets'] = _ApiClient2.default.convertToType(data['topFundAssets'], [_FundAssetPercent2.default]);
                }
                if (data.hasOwnProperty('statistic')) {
                    obj['statistic'] = _FundDetailsListStatistic2.default.constructFromObject(data['statistic']);
                }
                if (data.hasOwnProperty('personalDetails')) {
                    obj['personalDetails'] = _PersonalFundDetailsFull2.default.constructFromObject(data['personalDetails']);
                }
                if (data.hasOwnProperty('dashboardAssetsDetails')) {
                    obj['dashboardAssetsDetails'] = _DashboardProgramDetails2.default.constructFromObject(data['dashboardAssetsDetails']);
                }
                if (data.hasOwnProperty('id')) {
                    obj['id'] = _ApiClient2.default.convertToType(data['id'], 'String');
                }
                if (data.hasOwnProperty('logo')) {
                    obj['logo'] = _ApiClient2.default.convertToType(data['logo'], 'String');
                }
                if (data.hasOwnProperty('url')) {
                    obj['url'] = _ApiClient2.default.convertToType(data['url'], 'String');
                }
                if (data.hasOwnProperty('color')) {
                    obj['color'] = _ApiClient2.default.convertToType(data['color'], 'String');
                }
                if (data.hasOwnProperty('title')) {
                    obj['title'] = _ApiClient2.default.convertToType(data['title'], 'String');
                }
                if (data.hasOwnProperty('description')) {
                    obj['description'] = _ApiClient2.default.convertToType(data['description'], 'String');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
                }
                if (data.hasOwnProperty('creationDate')) {
                    obj['creationDate'] = _ApiClient2.default.convertToType(data['creationDate'], 'Date');
                }
                if (data.hasOwnProperty('manager')) {
                    obj['manager'] = _ProfilePublic2.default.constructFromObject(data['manager']);
                }
                if (data.hasOwnProperty('chart')) {
                    obj['chart'] = _ApiClient2.default.convertToType(data['chart'], [_ChartSimple2.default]);
                }
            }
            return obj;
        }
    }]);

    return FundDetails;
}();

FundDetails.StatusEnum = {

    "None": "None",

    "Pending": "Pending",

    "ErrorCreating": "ErrorCreating",

    "Active": "Active",

    "Closed": "Closed",

    "Archived": "Archived",

    "ClosedDueToInactivity": "ClosedDueToInactivity"
};
exports.default = FundDetails;