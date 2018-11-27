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
* The ProgramDetailsRating model module.
* @module model/ProgramDetailsRating
* @version v1.0
*/
var ProgramDetailsRating = function () {
    /**
    * Constructs a new <code>ProgramDetailsRating</code>.
    * @alias module:model/ProgramDetailsRating
    * @class
    */

    function ProgramDetailsRating() {
        _classCallCheck(this, ProgramDetailsRating);

        this.rating = undefined;
        this.profit = undefined;
        this.canLevelUp = undefined;
    }

    /**
    * Constructs a <code>ProgramDetailsRating</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProgramDetailsRating} obj Optional instance to populate.
    * @return {module:model/ProgramDetailsRating} The populated <code>ProgramDetailsRating</code> instance.
    */


    _createClass(ProgramDetailsRating, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ProgramDetailsRating();

                if (data.hasOwnProperty('rating')) {
                    obj['rating'] = _ApiClient2.default.convertToType(data['rating'], 'Number');
                }
                if (data.hasOwnProperty('profit')) {
                    obj['profit'] = _ApiClient2.default.convertToType(data['profit'], 'Number');
                }
                if (data.hasOwnProperty('canLevelUp')) {
                    obj['canLevelUp'] = _ApiClient2.default.convertToType(data['canLevelUp'], 'Boolean');
                }
            }
            return obj;
        }

        /**
        * @member {Number} rating
        */

        /**
        * @member {Number} profit
        */

        /**
        * @member {Boolean} canLevelUp
        */

    }]);

    return ProgramDetailsRating;
}();

exports.default = ProgramDetailsRating;