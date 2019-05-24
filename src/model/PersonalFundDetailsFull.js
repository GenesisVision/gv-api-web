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
 * @interface PersonalFundDetailsFull
 */

/**
 *
 * @name PersonalFundDetailsFull#withdrawPercent
 * @type {Number}
 */
/**
 *
 * @name PersonalFundDetailsFull#canReallocate
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFull#possibleReallocationTime
 * @type {Date}
 */
/**
 *
 * @name PersonalFundDetailsFull#isFavorite
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFull#isInvested
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFull#isOwnProgram
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFull#canCloseProgram
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFull#canCloseAsset
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFull#isFinishing
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFull#canInvest
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFull#canWithdraw
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFull#canClosePeriod
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFull#hasNotifications
 * @type {Boolean}
 */
/**
 *
 * @name PersonalFundDetailsFull#value
 * @type {Number}
 */
/**
 *
 * @name PersonalFundDetailsFull#profit
 * @type {Number}
 */
/**
 *
 * @name PersonalFundDetailsFull#invested
 * @type {Number}
 */
/**
 *
 * @name PersonalFundDetailsFull#pendingInput
 * @type {Number}
 */
/**
 *
 * @name PersonalFundDetailsFull#pendingOutput
 * @type {Number}
 */
/**
 *
 * @name PersonalFundDetailsFull#status
 * @type PersonalFundDetailsFullStatusEnum
 */





export default class PersonalFundDetailsFull {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonalFundDetailsFull();

            
            
            

            if (data.hasOwnProperty('withdrawPercent')) {
                obj['withdrawPercent'] = ApiClient.convertToType(data['withdrawPercent'], 'Number');
            }
            if (data.hasOwnProperty('canReallocate')) {
                obj['canReallocate'] = ApiClient.convertToType(data['canReallocate'], 'Boolean');
            }
            if (data.hasOwnProperty('possibleReallocationTime')) {
                obj['possibleReallocationTime'] = ApiClient.convertToType(data['possibleReallocationTime'], 'Date');
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

    withdrawPercent = undefined;
    canReallocate = undefined;
    possibleReallocationTime = undefined;
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
 * @typedef PersonalFundDetailsFullStatusEnum 
 * @type {("Pending"|"Active"|"Investing"|"Withdrawing"|"Ended")}
 */



