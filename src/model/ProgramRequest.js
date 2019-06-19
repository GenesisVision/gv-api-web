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
 * @interface ProgramRequest
 */

/**
 *
 * @name ProgramRequest#id
 * @type {String}
 */
/**
 *
 * @name ProgramRequest#programId
 * @type {String}
 */
/**
 *
 * @name ProgramRequest#date
 * @type {Date}
 */
/**
 *
 * @name ProgramRequest#value
 * @type {Number}
 */
/**
 *
 * @name ProgramRequest#valueGvt
 * @type {Number}
 */
/**
 *
 * @name ProgramRequest#withdrawAll
 * @type {Boolean}
 */
/**
 *
 * @name ProgramRequest#feeEntry
 * @type {Number}
 */
/**
 *
 * @name ProgramRequest#feeExit
 * @type {Number}
 */
/**
 *
 * @name ProgramRequest#currency
 * @type ProgramRequestCurrencyEnum
 */
/**
 *
 * @name ProgramRequest#fundWithdrawPercent
 * @type {Number}
 */
/**
 *
 * @name ProgramRequest#type
 * @type ProgramRequestTypeEnum
 */
/**
 *
 * @name ProgramRequest#status
 * @type ProgramRequestStatusEnum
 */
/**
 *
 * @name ProgramRequest#logo
 * @type {String}
 */
/**
 *
 * @name ProgramRequest#title
 * @type {String}
 */
/**
 *
 * @name ProgramRequest#color
 * @type {String}
 */
/**
 *
 * @name ProgramRequest#canCancelRequest
 * @type {Boolean}
 */
/**
 *
 * @name ProgramRequest#programType
 * @type ProgramRequestProgramTypeEnum
 */





export default class ProgramRequest {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramRequest();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('programId')) {
                obj['programId'] = ApiClient.convertToType(data['programId'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('valueGvt')) {
                obj['valueGvt'] = ApiClient.convertToType(data['valueGvt'], 'Number');
            }
            if (data.hasOwnProperty('withdrawAll')) {
                obj['withdrawAll'] = ApiClient.convertToType(data['withdrawAll'], 'Boolean');
            }
            if (data.hasOwnProperty('feeEntry')) {
                obj['feeEntry'] = ApiClient.convertToType(data['feeEntry'], 'Number');
            }
            if (data.hasOwnProperty('feeExit')) {
                obj['feeExit'] = ApiClient.convertToType(data['feeExit'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('fundWithdrawPercent')) {
                obj['fundWithdrawPercent'] = ApiClient.convertToType(data['fundWithdrawPercent'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('canCancelRequest')) {
                obj['canCancelRequest'] = ApiClient.convertToType(data['canCancelRequest'], 'Boolean');
            }
            if (data.hasOwnProperty('programType')) {
                obj['programType'] = ApiClient.convertToType(data['programType'], 'String');
            }
        }
        return obj;
    }

    id = undefined;
    programId = undefined;
    date = undefined;
    value = undefined;
    valueGvt = undefined;
    withdrawAll = undefined;
    feeEntry = undefined;
    feeExit = undefined;
    currency = undefined;
    fundWithdrawPercent = undefined;
    type = undefined;
    status = undefined;
    logo = undefined;
    title = undefined;
    color = undefined;
    canCancelRequest = undefined;
    programType = undefined;






    static CurrencyEnum = {
    
        "ETH": "ETH",
    
        "Undefined": "Undefined",
    
        "GVT": "GVT",
    
        "BTC": "BTC",
    
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

    static TypeEnum = {
    
        "Invest": "Invest",
    
        "Withdrawal": "Withdrawal"    
    };

    static StatusEnum = {
    
        "New": "New",
    
        "Executed": "Executed",
    
        "Cancelled": "Cancelled"    
    };

    static ProgramTypeEnum = {
    
        "Program": "Program",
    
        "Fund": "Fund"    
    };



}




/**
 * @typedef ProgramRequestCurrencyEnum 
 * @type {("ETH"|"Undefined"|"GVT"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */

/**
 * @typedef ProgramRequestTypeEnum 
 * @type {("Invest"|"Withdrawal")}
 */

/**
 * @typedef ProgramRequestStatusEnum 
 * @type {("New"|"Executed"|"Cancelled")}
 */

/**
 * @typedef ProgramRequestProgramTypeEnum 
 * @type {("Program"|"Fund")}
 */



