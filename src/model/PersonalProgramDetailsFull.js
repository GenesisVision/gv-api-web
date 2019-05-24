/**
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


import ApiClient from '../ApiClient';
import SignalSubscription from './SignalSubscription';





/**
 *
 * @interface PersonalProgramDetailsFull
 */

/**
 *
 * @name PersonalProgramDetailsFull#isReinvest
 * @type {Boolean}
 */
/**
 *
 * @name PersonalProgramDetailsFull#gvtValue
 * @type {Number}
 */
/**
 *
 * @name PersonalProgramDetailsFull#showTwoFactorButton
 * @type {Boolean}
 */
/**
 *
 * @name PersonalProgramDetailsFull#signalSubscription
 * @type {SignalSubscription}
 */
/**
 *
 * @name PersonalProgramDetailsFull#login
 * @type {String}
 */
/**
 *
 * @name PersonalProgramDetailsFull#notificationAvailableToInvestId
 * @type {String}
 */
/**
 *
 * @name PersonalProgramDetailsFull#canMakeSignalProvider
 * @type {Boolean}
 */
/**
 *
 * @name PersonalProgramDetailsFull#isFavorite
 * @type {Boolean}
 */
/**
 *
 * @name PersonalProgramDetailsFull#isInvested
 * @type {Boolean}
 */
/**
 *
 * @name PersonalProgramDetailsFull#isOwnProgram
 * @type {Boolean}
 */
/**
 *
 * @name PersonalProgramDetailsFull#canCloseProgram
 * @type {Boolean}
 */
/**
 *
 * @name PersonalProgramDetailsFull#canCloseAsset
 * @type {Boolean}
 */
/**
 *
 * @name PersonalProgramDetailsFull#isFinishing
 * @type {Boolean}
 */
/**
 *
 * @name PersonalProgramDetailsFull#canInvest
 * @type {Boolean}
 */
/**
 *
 * @name PersonalProgramDetailsFull#canWithdraw
 * @type {Boolean}
 */
/**
 *
 * @name PersonalProgramDetailsFull#canClosePeriod
 * @type {Boolean}
 */
/**
 *
 * @name PersonalProgramDetailsFull#hasNotifications
 * @type {Boolean}
 */
/**
 *
 * @name PersonalProgramDetailsFull#value
 * @type {Number}
 */
/**
 *
 * @name PersonalProgramDetailsFull#profit
 * @type {Number}
 */
/**
 *
 * @name PersonalProgramDetailsFull#invested
 * @type {Number}
 */
/**
 *
 * @name PersonalProgramDetailsFull#pendingInput
 * @type {Number}
 */
/**
 *
 * @name PersonalProgramDetailsFull#pendingOutput
 * @type {Number}
 */
/**
 *
 * @name PersonalProgramDetailsFull#status
 * @type PersonalProgramDetailsFullStatusEnum
 */





export default class PersonalProgramDetailsFull {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonalProgramDetailsFull();

            
            
            

            if (data.hasOwnProperty('isReinvest')) {
                obj['isReinvest'] = ApiClient.convertToType(data['isReinvest'], 'Boolean');
            }
            if (data.hasOwnProperty('gvtValue')) {
                obj['gvtValue'] = ApiClient.convertToType(data['gvtValue'], 'Number');
            }
            if (data.hasOwnProperty('showTwoFactorButton')) {
                obj['showTwoFactorButton'] = ApiClient.convertToType(data['showTwoFactorButton'], 'Boolean');
            }
            if (data.hasOwnProperty('signalSubscription')) {
                obj['signalSubscription'] = SignalSubscription.constructFromObject(data['signalSubscription']);
            }
            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'String');
            }
            if (data.hasOwnProperty('notificationAvailableToInvestId')) {
                obj['notificationAvailableToInvestId'] = ApiClient.convertToType(data['notificationAvailableToInvestId'], 'String');
            }
            if (data.hasOwnProperty('canMakeSignalProvider')) {
                obj['canMakeSignalProvider'] = ApiClient.convertToType(data['canMakeSignalProvider'], 'Boolean');
            }
            if (data.hasOwnProperty('isFavorite')) {
                obj['isFavorite'] = ApiClient.convertToType(data['isFavorite'], 'Boolean');
            }
            if (data.hasOwnProperty('isInvested')) {
                obj['isInvested'] = ApiClient.convertToType(data['isInvested'], 'Boolean');
            }
            if (data.hasOwnProperty('isOwnProgram')) {
                obj['isOwnProgram'] = ApiClient.convertToType(data['isOwnProgram'], 'Boolean');
            }
            if (data.hasOwnProperty('canCloseProgram')) {
                obj['canCloseProgram'] = ApiClient.convertToType(data['canCloseProgram'], 'Boolean');
            }
            if (data.hasOwnProperty('canCloseAsset')) {
                obj['canCloseAsset'] = ApiClient.convertToType(data['canCloseAsset'], 'Boolean');
            }
            if (data.hasOwnProperty('isFinishing')) {
                obj['isFinishing'] = ApiClient.convertToType(data['isFinishing'], 'Boolean');
            }
            if (data.hasOwnProperty('canInvest')) {
                obj['canInvest'] = ApiClient.convertToType(data['canInvest'], 'Boolean');
            }
            if (data.hasOwnProperty('canWithdraw')) {
                obj['canWithdraw'] = ApiClient.convertToType(data['canWithdraw'], 'Boolean');
            }
            if (data.hasOwnProperty('canClosePeriod')) {
                obj['canClosePeriod'] = ApiClient.convertToType(data['canClosePeriod'], 'Boolean');
            }
            if (data.hasOwnProperty('hasNotifications')) {
                obj['hasNotifications'] = ApiClient.convertToType(data['hasNotifications'], 'Boolean');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('profit')) {
                obj['profit'] = ApiClient.convertToType(data['profit'], 'Number');
            }
            if (data.hasOwnProperty('invested')) {
                obj['invested'] = ApiClient.convertToType(data['invested'], 'Number');
            }
            if (data.hasOwnProperty('pendingInput')) {
                obj['pendingInput'] = ApiClient.convertToType(data['pendingInput'], 'Number');
            }
            if (data.hasOwnProperty('pendingOutput')) {
                obj['pendingOutput'] = ApiClient.convertToType(data['pendingOutput'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    isReinvest = undefined;
    gvtValue = undefined;
    showTwoFactorButton = undefined;
    signalSubscription = undefined;
    login = undefined;
    notificationAvailableToInvestId = undefined;
    canMakeSignalProvider = undefined;
    isFavorite = undefined;
    isInvested = undefined;
    isOwnProgram = undefined;
    canCloseProgram = undefined;
    canCloseAsset = undefined;
    isFinishing = undefined;
    canInvest = undefined;
    canWithdraw = undefined;
    canClosePeriod = undefined;
    hasNotifications = undefined;
    value = undefined;
    profit = undefined;
    invested = undefined;
    pendingInput = undefined;
    pendingOutput = undefined;
    status = undefined;






    static StatusEnum = {
    
        "Pending": "Pending",
    
        "Active": "Active",
    
        "Investing": "Investing",
    
        "Withdrawing": "Withdrawing",
    
        "Ended": "Ended"    
    };



}




/**
 * @typedef PersonalProgramDetailsFullStatusEnum 
 * @type {("Pending"|"Active"|"Investing"|"Withdrawing"|"Ended")}
 */



