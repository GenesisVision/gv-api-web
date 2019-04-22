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

var _ProgramTag = require('./ProgramTag');

var _ProgramTag2 = _interopRequireDefault(_ProgramTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 * @interface ProgramFilters
 */

/**
 *
 * @name ProgramFilters#programTags
 * @type {[ProgramTag]}
 */
/**
 *
 * @name ProgramFilters#actionType
 * @type {[String]}
 */
/**
 *
 * @name ProgramFilters#customNotificationType
 * @type {[String]}
 */

var ProgramFilters = function () {
    function ProgramFilters() {
        _classCallCheck(this, ProgramFilters);

        this.programTags = undefined;
        this.actionType = undefined;
        this.customNotificationType = undefined;
    }

    _createClass(ProgramFilters, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ProgramFilters();

                if (data.hasOwnProperty('programTags')) {
                    obj['programTags'] = _ApiClient2.default.convertToType(data['programTags'], [_ProgramTag2.default]);
                }
                if (data.hasOwnProperty('actionType')) {
                    obj['actionType'] = _ApiClient2.default.convertToType(data['actionType'], ['String']);
                }
                if (data.hasOwnProperty('customNotificationType')) {
                    obj['customNotificationType'] = _ApiClient2.default.convertToType(data['customNotificationType'], ['String']);
                }
            }
            return obj;
        }
    }]);

    return ProgramFilters;
}();

exports.default = ProgramFilters;