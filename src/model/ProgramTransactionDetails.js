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
 * @interface ProgramTransactionDetails
 */

/**
 *
 * @name ProgramTransactionDetails#id
 * @type {String}
 */
/**
 *
 * @name ProgramTransactionDetails#managerName
 * @type {String}
 */
/**
 *
 * @name ProgramTransactionDetails#programType
 * @type ProgramTransactionDetailsProgramTypeEnum
 */
/**
 *
 * @name ProgramTransactionDetails#successFeeCurrency
 * @type ProgramTransactionDetailsSuccessFeeCurrencyEnum
 */
/**
 *
 * @name ProgramTransactionDetails#logo
 * @type {String}
 */
/**
 *
 * @name ProgramTransactionDetails#title
 * @type {String}
 */
/**
 *
 * @name ProgramTransactionDetails#entryFee
 * @type {Number}
 */
/**
 *
 * @name ProgramTransactionDetails#entryFeePercent
 * @type {Number}
 */
/**
 *
 * @name ProgramTransactionDetails#successFee
 * @type {Number}
 */
/**
 *
 * @name ProgramTransactionDetails#successFeePercent
 * @type {Number}
 */
/**
 *
 * @name ProgramTransactionDetails#level
 * @type {Number}
 */
/**
 *
 * @name ProgramTransactionDetails#levelProgress
 * @type {Number}
 */
/**
 *
 * @name ProgramTransactionDetails#exitFee
 * @type {Number}
 */
/**
 *
 * @name ProgramTransactionDetails#exitFeePercent
 * @type {Number}
 */
/**
 *
 * @name ProgramTransactionDetails#color
 * @type {String}
 */





export default class ProgramTransactionDetails {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramTransactionDetails();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('managerName')) {
                obj['managerName'] = ApiClient.convertToType(data['managerName'], 'String');
            }
            if (data.hasOwnProperty('programType')) {
                obj['programType'] = ApiClient.convertToType(data['programType'], 'String');
            }
            if (data.hasOwnProperty('successFeeCurrency')) {
                obj['successFeeCurrency'] = ApiClient.convertToType(data['successFeeCurrency'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('entryFee')) {
                obj['entryFee'] = ApiClient.convertToType(data['entryFee'], 'Number');
            }
            if (data.hasOwnProperty('entryFeePercent')) {
                obj['entryFeePercent'] = ApiClient.convertToType(data['entryFeePercent'], 'Number');
            }
            if (data.hasOwnProperty('successFee')) {
                obj['successFee'] = ApiClient.convertToType(data['successFee'], 'Number');
            }
            if (data.hasOwnProperty('successFeePercent')) {
                obj['successFeePercent'] = ApiClient.convertToType(data['successFeePercent'], 'Number');
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'Number');
            }
            if (data.hasOwnProperty('levelProgress')) {
                obj['levelProgress'] = ApiClient.convertToType(data['levelProgress'], 'Number');
            }
            if (data.hasOwnProperty('exitFee')) {
                obj['exitFee'] = ApiClient.convertToType(data['exitFee'], 'Number');
            }
            if (data.hasOwnProperty('exitFeePercent')) {
                obj['exitFeePercent'] = ApiClient.convertToType(data['exitFeePercent'], 'Number');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
        }
        return obj;
    }

    id = undefined;
    managerName = undefined;
    programType = undefined;
    successFeeCurrency = undefined;
    logo = undefined;
    title = undefined;
    entryFee = undefined;
    entryFeePercent = undefined;
    successFee = undefined;
    successFeePercent = undefined;
    level = undefined;
    levelProgress = undefined;
    exitFee = undefined;
    exitFeePercent = undefined;
    color = undefined;






    static ProgramTypeEnum = {
    
        "Program": "Program",
    
        "Fund": "Fund"    
    };

    static SuccessFeeCurrencyEnum = {
    
        "BTC": "BTC",
    
        "ETH": "ETH",
    
        "Undefined": "Undefined",
    
        "GVT": "GVT",
    
        "ADA": "ADA",
    
        "USDT": "USDT",
    
        "XRP": "XRP",
    
        "BCH": "BCH",
    
        "LTC": "LTC",
    
        "DOGE": "DOGE",
    
        "BNB": "BNB",
    
        "USD": "USD",
    
        "EUR": "EUR"    
    };



}




/**
 * @typedef ProgramTransactionDetailsProgramTypeEnum 
 * @type {("Program"|"Fund")}
 */

/**
 * @typedef ProgramTransactionDetailsSuccessFeeCurrencyEnum 
 * @type {("BTC"|"ETH"|"Undefined"|"GVT"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */



