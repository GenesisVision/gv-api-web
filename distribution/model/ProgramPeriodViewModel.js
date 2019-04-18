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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @interface ProgramPeriodViewModel
 */

/**
 *
 * @name ProgramPeriodViewModel#dateFrom
 * @type {Date}
 */
/**
 *
 * @name ProgramPeriodViewModel#dateTo
 * @type {Date}
 */
/**
 *
 * @name ProgramPeriodViewModel#status
 * @type ProgramPeriodViewModelStatusEnum
 */
/**
 *
 * @name ProgramPeriodViewModel#number
 * @type {Number}
 */
/**
 *
 * @name ProgramPeriodViewModel#profit
 * @type {Number}
 */

var ProgramPeriodViewModel = function () {
    function ProgramPeriodViewModel() {
        _classCallCheck(this, ProgramPeriodViewModel);

        this.dateFrom = undefined;
        this.dateTo = undefined;
        this.status = undefined;
        this.number = undefined;
        this.profit = undefined;
    }

    _createClass(ProgramPeriodViewModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ProgramPeriodViewModel();

                if (data.hasOwnProperty('dateFrom')) {
                    obj['dateFrom'] = _ApiClient2.default.convertToType(data['dateFrom'], 'Date');
                }
                if (data.hasOwnProperty('dateTo')) {
                    obj['dateTo'] = _ApiClient2.default.convertToType(data['dateTo'], 'Date');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
                }
                if (data.hasOwnProperty('number')) {
                    obj['number'] = _ApiClient2.default.convertToType(data['number'], 'Number');
                }
                if (data.hasOwnProperty('profit')) {
                    obj['profit'] = _ApiClient2.default.convertToType(data['profit'], 'Number');
                }
            }
            return obj;
        }
    }]);

    return ProgramPeriodViewModel;
}();

/**
 * @typedef ProgramPeriodViewModelStatusEnum 
 * @type {("Planned"|"InProccess"|"Closed")}
 */


ProgramPeriodViewModel.StatusEnum = {

    "Planned": "Planned",

    "InProccess": "InProccess",

    "Closed": "Closed"
};
exports.default = ProgramPeriodViewModel;