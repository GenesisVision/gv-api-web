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

var _ProgramSet = require('./ProgramSet');

var _ProgramSet2 = _interopRequireDefault(_ProgramSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The ProgramSets model module.
* @module model/ProgramSets
* @version v1.0
*/
var ProgramSets = function () {
    /**
    * Constructs a new <code>ProgramSets</code>.
    * @alias module:model/ProgramSets
    * @class
    */

    function ProgramSets() {
        _classCallCheck(this, ProgramSets);

        this.sets = undefined;
        this.favoritesCount = undefined;
    }

    /**
    * Constructs a <code>ProgramSets</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProgramSets} obj Optional instance to populate.
    * @return {module:model/ProgramSets} The populated <code>ProgramSets</code> instance.
    */


    _createClass(ProgramSets, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new ProgramSets();

                if (data.hasOwnProperty('sets')) {
                    obj['sets'] = _ApiClient2.default.convertToType(data['sets'], [_ProgramSet2.default]);
                }
                if (data.hasOwnProperty('favoritesCount')) {
                    obj['favoritesCount'] = _ApiClient2.default.convertToType(data['favoritesCount'], 'Number');
                }
            }
            return obj;
        }

        /**
        * @member {Array.<module:model/ProgramSet>} sets
        */

        /**
        * @member {Number} favoritesCount
        */

    }]);

    return ProgramSets;
}();

exports.default = ProgramSets;