'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Core API
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OpenAPI spec version: v1
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
* The PlatformStatus model module.
* @module model/PlatformStatus
* @version v1
*/
var PlatformStatus = function () {
    /**
    * Constructs a new <code>PlatformStatus</code>.
    * @alias module:model/PlatformStatus
    * @class
    */

    function PlatformStatus() {
        _classCallCheck(this, PlatformStatus);

        this.isTournamentActive = undefined;
        this.isTournamentRegistrationActive = undefined;
        this.tournamentCurrentRound = undefined;
        this.tournamentTotalRounds = undefined;
    }

    /**
    * Constructs a <code>PlatformStatus</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PlatformStatus} obj Optional instance to populate.
    * @return {module:model/PlatformStatus} The populated <code>PlatformStatus</code> instance.
    */


    _createClass(PlatformStatus, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new PlatformStatus();

                if (data.hasOwnProperty('isTournamentActive')) {
                    obj['isTournamentActive'] = _ApiClient2.default.convertToType(data['isTournamentActive'], 'Boolean');
                }
                if (data.hasOwnProperty('isTournamentRegistrationActive')) {
                    obj['isTournamentRegistrationActive'] = _ApiClient2.default.convertToType(data['isTournamentRegistrationActive'], 'Boolean');
                }
                if (data.hasOwnProperty('tournamentCurrentRound')) {
                    obj['tournamentCurrentRound'] = _ApiClient2.default.convertToType(data['tournamentCurrentRound'], 'Number');
                }
                if (data.hasOwnProperty('tournamentTotalRounds')) {
                    obj['tournamentTotalRounds'] = _ApiClient2.default.convertToType(data['tournamentTotalRounds'], 'Number');
                }
            }
            return obj;
        }

        /**
        * @member {Boolean} isTournamentActive
        */

        /**
        * @member {Boolean} isTournamentRegistrationActive
        */

        /**
        * @member {Number} tournamentCurrentRound
        */

        /**
        * @member {Number} tournamentTotalRounds
        */

    }]);

    return PlatformStatus;
}();

exports.default = PlatformStatus;