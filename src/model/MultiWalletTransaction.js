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
import Currency from './Currency';
import MultiWalletTransactionStatus from './MultiWalletTransactionStatus';
import MultiWalletTransactionType from './MultiWalletTransactionType';





/**
 *
 * @interface MultiWalletTransaction
 */

/**
 *
 * @name MultiWalletTransaction#id
 * @type {String}
 */
/**
 *
 * @name MultiWalletTransaction#currencyFrom
 * @type {Currency}
 */
/**
 *
 * @name MultiWalletTransaction#currencyTo
 * @type MultiWalletTransactionCurrencyToEnum
 */
/**
 *
 * @name MultiWalletTransaction#type
 * @type {MultiWalletTransactionType}
 */
/**
 *
 * @name MultiWalletTransaction#date
 * @type {Date}
 */
/**
 *
 * @name MultiWalletTransaction#status
 * @type {MultiWalletTransactionStatus}
 */
/**
 *
 * @name MultiWalletTransaction#logoFrom
 * @type {String}
 */
/**
 *
 * @name MultiWalletTransaction#logoTo
 * @type {String}
 */
/**
 *
 * @name MultiWalletTransaction#description
 * @type {String}
 */
/**
 *
 * @name MultiWalletTransaction#amount
 * @type {Number}
 */
/**
 *
 * @name MultiWalletTransaction#amountTo
 * @type {Number}
 */





export default class MultiWalletTransaction {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultiWalletTransaction();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('currencyFrom')) {
                obj['currencyFrom'] = Currency.constructFromObject(data['currencyFrom']);
            }
            if (data.hasOwnProperty('currencyTo')) {
                obj['currencyTo'] = ApiClient.convertToType(data['currencyTo'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = MultiWalletTransactionType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = MultiWalletTransactionStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('logoFrom')) {
                obj['logoFrom'] = ApiClient.convertToType(data['logoFrom'], 'String');
            }
            if (data.hasOwnProperty('logoTo')) {
                obj['logoTo'] = ApiClient.convertToType(data['logoTo'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('amountTo')) {
                obj['amountTo'] = ApiClient.convertToType(data['amountTo'], 'Number');
            }
        }
        return obj;
    }

    id = undefined;
    currencyFrom = undefined;
    currencyTo = undefined;
    type = undefined;
    date = undefined;
    status = undefined;
    logoFrom = undefined;
    logoTo = undefined;
    description = undefined;
    amount = undefined;
    amountTo = undefined;






    static CurrencyToEnum = {
    
        "DOGE": "DOGE",
    
        "BNB": "BNB",
    
        "USD": "USD",
    
        "EUR": "EUR",
    
        "Undefined": "Undefined",
    
        "GVT": "GVT",
    
        "ETH": "ETH",
    
        "BTC": "BTC",
    
        "ADA": "ADA",
    
        "USDT": "USDT",
    
        "XRP": "XRP",
    
        "BCH": "BCH",
    
        "LTC": "LTC"    
    };



}




/**
 * @typedef MultiWalletTransactionCurrencyToEnum 
 * @type {("DOGE"|"BNB"|"USD"|"EUR"|"Undefined"|"GVT"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC")}
 */



