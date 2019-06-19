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
 * @type MultiWalletTransactionCurrencyFromEnum
 */
/**
 *
 * @name MultiWalletTransaction#currencyTo
 * @type MultiWalletTransactionCurrencyToEnum
 */
/**
 *
 * @name MultiWalletTransaction#type
 * @type MultiWalletTransactionTypeEnum
 */
/**
 *
 * @name MultiWalletTransaction#date
 * @type {Date}
 */
/**
 *
 * @name MultiWalletTransaction#status
 * @type MultiWalletTransactionStatusEnum
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
                obj['currencyFrom'] = ApiClient.convertToType(data['currencyFrom'], 'String');
            }
            if (data.hasOwnProperty('currencyTo')) {
                obj['currencyTo'] = ApiClient.convertToType(data['currencyTo'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
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






    static CurrencyFromEnum = {
    
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

    static CurrencyToEnum = {
    
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
    
        "All": "All",
    
        "Investment": "Investment",
    
        "Converting": "Converting",
    
        "Withdrawal": "Withdrawal",
    
        "Close": "Close",
    
        "Open": "Open",
    
        "Fee": "Fee",
    
        "Profits": "Profits",
    
        "SubscribeSignal": "SubscribeSignal",
    
        "ReceiveSignal": "ReceiveSignal",
    
        "DepositSignal": "DepositSignal",
    
        "WithdrawalSignal": "WithdrawalSignal",
    
        "Platform": "Platform"    
    };

    static StatusEnum = {
    
        "Done": "Done",
    
        "Pending": "Pending",
    
        "Canceled": "Canceled",
    
        "Error": "Error"    
    };



}




/**
 * @typedef MultiWalletTransactionCurrencyFromEnum 
 * @type {("ETH"|"Undefined"|"GVT"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */

/**
 * @typedef MultiWalletTransactionCurrencyToEnum 
 * @type {("ETH"|"Undefined"|"GVT"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */

/**
 * @typedef MultiWalletTransactionTypeEnum 
 * @type {("All"|"Investment"|"Converting"|"Withdrawal"|"Close"|"Open"|"Fee"|"Profits"|"SubscribeSignal"|"ReceiveSignal"|"DepositSignal"|"WithdrawalSignal"|"Platform")}
 */

/**
 * @typedef MultiWalletTransactionStatusEnum 
 * @type {("Done"|"Pending"|"Canceled"|"Error")}
 */



