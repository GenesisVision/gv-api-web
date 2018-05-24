/**
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


import ApiClient from '../ApiClient';
import AndroidAppVersion from './AndroidAppVersion';
import IOsAppVersion from './IOsAppVersion';





/**
* The PlatformStatus model module.
* @module model/PlatformStatus
* @version v1
*/
export default class PlatformStatus {
    /**
    * Constructs a new <code>PlatformStatus</code>.
    * @alias module:model/PlatformStatus
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PlatformStatus</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PlatformStatus} obj Optional instance to populate.
    * @return {module:model/PlatformStatus} The populated <code>PlatformStatus</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlatformStatus();

            
            
            

            if (data.hasOwnProperty('isTournamentActive')) {
                obj['isTournamentActive'] = ApiClient.convertToType(data['isTournamentActive'], 'Boolean');
            }
            if (data.hasOwnProperty('isTournamentRegistrationActive')) {
                obj['isTournamentRegistrationActive'] = ApiClient.convertToType(data['isTournamentRegistrationActive'], 'Boolean');
            }
            if (data.hasOwnProperty('tournamentCurrentRound')) {
                obj['tournamentCurrentRound'] = ApiClient.convertToType(data['tournamentCurrentRound'], 'Number');
            }
            if (data.hasOwnProperty('tournamentTotalRounds')) {
                obj['tournamentTotalRounds'] = ApiClient.convertToType(data['tournamentTotalRounds'], 'Number');
            }
            if (data.hasOwnProperty('programsMinAvgProfit')) {
                obj['programsMinAvgProfit'] = ApiClient.convertToType(data['programsMinAvgProfit'], 'Number');
            }
            if (data.hasOwnProperty('programsMaxAvgProfit')) {
                obj['programsMaxAvgProfit'] = ApiClient.convertToType(data['programsMaxAvgProfit'], 'Number');
            }
            if (data.hasOwnProperty('programsMinTotalProfit')) {
                obj['programsMinTotalProfit'] = ApiClient.convertToType(data['programsMinTotalProfit'], 'Number');
            }
            if (data.hasOwnProperty('programsMaxTotalProfit')) {
                obj['programsMaxTotalProfit'] = ApiClient.convertToType(data['programsMaxTotalProfit'], 'Number');
            }
            if (data.hasOwnProperty('iOSVersion')) {
                obj['iOSVersion'] = IOsAppVersion.constructFromObject(data['iOSVersion']);
            }
            if (data.hasOwnProperty('androidVersion')) {
                obj['androidVersion'] = AndroidAppVersion.constructFromObject(data['androidVersion']);
            }
        }
        return obj;
    }

    /**
    * @member {Boolean} isTournamentActive
    */
    isTournamentActive = undefined;
    /**
    * @member {Boolean} isTournamentRegistrationActive
    */
    isTournamentRegistrationActive = undefined;
    /**
    * @member {Number} tournamentCurrentRound
    */
    tournamentCurrentRound = undefined;
    /**
    * @member {Number} tournamentTotalRounds
    */
    tournamentTotalRounds = undefined;
    /**
    * @member {Number} programsMinAvgProfit
    */
    programsMinAvgProfit = undefined;
    /**
    * @member {Number} programsMaxAvgProfit
    */
    programsMaxAvgProfit = undefined;
    /**
    * @member {Number} programsMinTotalProfit
    */
    programsMinTotalProfit = undefined;
    /**
    * @member {Number} programsMaxTotalProfit
    */
    programsMaxTotalProfit = undefined;
    /**
    * @member {module:model/IOsAppVersion} iOSVersion
    */
    iOSVersion = undefined;
    /**
    * @member {module:model/AndroidAppVersion} androidVersion
    */
    androidVersion = undefined;








}


