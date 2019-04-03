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

var _ProgramPeriodViewModel = require('./ProgramPeriodViewModel');

var _ProgramPeriodViewModel2 = _interopRequireDefault(_ProgramPeriodViewModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @interface ProgramPeriodsViewModel
 */

/**
 *
 * @name ProgramPeriodsViewModel#periods
 * @type {[ProgramPeriodViewModel]}
 */
/**
 *
 * @name ProgramPeriodsViewModel#total
 * @type {Number}
 */

var ProgramPeriodsViewModel = function () {
    function ProgramPeriodsViewModel() {
        _classCallCheck(this, ProgramPeriodsViewModel);

        this.periods = undefined;
        this.total = undefined;
    }

    _createClass(ProgramPeriodsViewModel, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ProgramPeriodsViewModel();

                if (data.hasOwnProperty('periods')) {
                    obj['periods'] = _ApiClient2.default.convertToType(data['periods'], [_ProgramPeriodViewModel2.default]);
                }
                if (data.hasOwnProperty('total')) {
                    obj['total'] = _ApiClient2.default.convertToType(data['total'], 'Number');
                }
            }
            return obj;
        }
    }]);

    return ProgramPeriodsViewModel;
}();

exports.default = ProgramPeriodsViewModel;