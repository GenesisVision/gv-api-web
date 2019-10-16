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





/**
 *
 * @interface PersonalFundDetailsFullOld
 */

/**
 *
 * @name PersonalFundDetailsFullOld#withdrawPercent
 * @type {Number}
 */
/**
 *
 * @name PersonalFundDetailsFullOld#canReallocate
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFullOld#availableReallocationPercents
 * @type {Number}
 */
/**
 *
 * @name PersonalFundDetailsFullOld#nextReallocationPercents
 * @type {Date}
 */
/**
 *
 * @name PersonalFundDetailsFullOld#exitFeePersonal
 * @type {Number}
 */
/**
 *
 * @name PersonalFundDetailsFullOld#isFavorite
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFullOld#isInvested
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFullOld#isOwnProgram
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFullOld#canCloseAsset
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFullOld#isFinishing
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFullOld#canInvest
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFullOld#canWithdraw
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFullOld#canClosePeriod
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFullOld#hasNotifications
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFullOld#value
 * @type {Number}
 */
/**
 *
 * @name PersonalFundDetailsFullOld#profit
 * @type {Number}
 */
/**
 *
 * @name PersonalFundDetailsFullOld#invested
 * @type {Number}
 */
/**
 *
 * @name PersonalFundDetailsFullOld#pendingInput
 * @type {Number}
 */
/**
 *
 * @name PersonalFundDetailsFullOld#pendingOutput
 * @type {Number}
 */
/**
 *
 * @name PersonalFundDetailsFullOld#pendingOutputIsWithdrawAll
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFullOld#status
 * @type PersonalFundDetailsFullOldStatusEnum
 */





export default class PersonalFundDetailsFullOld {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonalFundDetailsFullOld();

            
            
            

            if (data.hasOwnProperty('withdrawPercent')) {
                obj['withdrawPercent'] = ApiClient.convertToType(data['withdrawPercent'], 'Number');
            }
            if (data.hasOwnProperty('canReallocate')) {
                obj['canReallocate'] = ApiClient.convertToType(data['canReallocate'], 'Boolean');
            }
            if (data.hasOwnProperty('availableReallocationPercents')) {
                obj['availableReallocationPercents'] = ApiClient.convertToType(data['availableReallocationPercents'], 'Number');
            }
            if (data.hasOwnProperty('nextReallocationPercents')) {
                obj['nextReallocationPercents'] = ApiClient.convertToType(data['nextReallocationPercents'], 'Date');
            }
            if (data.hasOwnProperty('exitFeePersonal')) {
                obj['exitFeePersonal'] = ApiClient.convertToType(data['exitFeePersonal'], 'Number');
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
            if (data.hasOwnProperty('pendingOutputIsWithdrawAll')) {
                obj['pendingOutputIsWithdrawAll'] = ApiClient.convertToType(data['pendingOutputIsWithdrawAll'], 'Boolean');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    withdrawPercent = undefined;
    canReallocate = undefined;
    availableReallocationPercents = undefined;
    nextReallocationPercents = undefined;
    exitFeePersonal = undefined;
    isFavorite = undefined;
    isInvested = undefined;
    isOwnProgram = undefined;
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
    pendingOutputIsWithdrawAll = undefined;
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
 * @typedef PersonalFundDetailsFullOldStatusEnum 
 * @type {("Pending"|"Active"|"Investing"|"Withdrawing"|"Ended")}
 */



