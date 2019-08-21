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
 * @interface WalletData
 */

/**
 *
 * @name WalletData#id
 * @type {String}
 */
/**
 *
 * @name WalletData#title
 * @type {String}
 */
/**
 *
 * @name WalletData#logo
 * @type {String}
 */
/**
 *
 * @name WalletData#rateToGVT
 * @type {Number}
 */
/**
 *
 * @name WalletData#isDepositEnabled
 * @type {Boolean}
 */
/**
 *
 * @name WalletData#isWithdrawalEnabled
 * @type {Boolean}
 */
/**
 *
 * @name WalletData#withdrawalCommission
 * @type {Number}
 */
/**
 *
 * @name WalletData#depositAddress
 * @type {String}
 */
/**
 *
 * @name WalletData#currency
 * @type WalletDataCurrencyEnum
 */
/**
 *
 * @name WalletData#available
 * @type {Number}
 */
/**
 *
 * @name WalletData#invested
 * @type {Number}
 */
/**
 *
 * @name WalletData#pending
 * @type {Number}
 */
/**
 *
 * @name WalletData#total
 * @type {Number}
 */
/**
 *
 * @name WalletData#currencyCcy
 * @type WalletDataCurrencyCcyEnum
 */
/**
 *
 * @name WalletData#availableCcy
 * @type {Number}
 */
/**
 *
 * @name WalletData#investedCcy
 * @type {Number}
 */
/**
 *
 * @name WalletData#pendingCcy
 * @type {Number}
 */
/**
 *
 * @name WalletData#totalCcy
 * @type {Number}
 */





export default class WalletData {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WalletData();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('rateToGVT')) {
                obj['rateToGVT'] = ApiClient.convertToType(data['rateToGVT'], 'Number');
            }
            if (data.hasOwnProperty('isDepositEnabled')) {
                obj['isDepositEnabled'] = ApiClient.convertToType(data['isDepositEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('isWithdrawalEnabled')) {
                obj['isWithdrawalEnabled'] = ApiClient.convertToType(data['isWithdrawalEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('withdrawalCommission')) {
                obj['withdrawalCommission'] = ApiClient.convertToType(data['withdrawalCommission'], 'Number');
            }
            if (data.hasOwnProperty('depositAddress')) {
                obj['depositAddress'] = ApiClient.convertToType(data['depositAddress'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('available')) {
                obj['available'] = ApiClient.convertToType(data['available'], 'Number');
            }
            if (data.hasOwnProperty('invested')) {
                obj['invested'] = ApiClient.convertToType(data['invested'], 'Number');
            }
            if (data.hasOwnProperty('pending')) {
                obj['pending'] = ApiClient.convertToType(data['pending'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('currencyCcy')) {
                obj['currencyCcy'] = ApiClient.convertToType(data['currencyCcy'], 'String');
            }
            if (data.hasOwnProperty('availableCcy')) {
                obj['availableCcy'] = ApiClient.convertToType(data['availableCcy'], 'Number');
            }
            if (data.hasOwnProperty('investedCcy')) {
                obj['investedCcy'] = ApiClient.convertToType(data['investedCcy'], 'Number');
            }
            if (data.hasOwnProperty('pendingCcy')) {
                obj['pendingCcy'] = ApiClient.convertToType(data['pendingCcy'], 'Number');
            }
            if (data.hasOwnProperty('totalCcy')) {
                obj['totalCcy'] = ApiClient.convertToType(data['totalCcy'], 'Number');
            }
        }
        return obj;
    }

    id = undefined;
    title = undefined;
    logo = undefined;
    rateToGVT = undefined;
    isDepositEnabled = undefined;
    isWithdrawalEnabled = undefined;
    withdrawalCommission = undefined;
    depositAddress = undefined;
    currency = undefined;
    available = undefined;
    invested = undefined;
    pending = undefined;
    total = undefined;
    currencyCcy = undefined;
    availableCcy = undefined;
    investedCcy = undefined;
    pendingCcy = undefined;
    totalCcy = undefined;






    static CurrencyEnum = {
    
        "USDT": "USDT",
    
        "XRP": "XRP",
    
        "BCH": "BCH",
    
        "LTC": "LTC",
    
        "DOGE": "DOGE",
    
        "BNB": "BNB",
    
        "USD": "USD",
    
        "EUR": "EUR",
    
        "Undefined": "Undefined",
    
        "GVT": "GVT",
    
        "ETH": "ETH",
    
        "BTC": "BTC",
    
        "ADA": "ADA"    
    };

    static CurrencyCcyEnum = {
    
        "USDT": "USDT",
    
        "XRP": "XRP",
    
        "BCH": "BCH",
    
        "LTC": "LTC",
    
        "DOGE": "DOGE",
    
        "BNB": "BNB",
    
        "USD": "USD",
    
        "EUR": "EUR",
    
        "Undefined": "Undefined",
    
        "GVT": "GVT",
    
        "ETH": "ETH",
    
        "BTC": "BTC",
    
        "ADA": "ADA"    
    };



}




/**
 * @typedef WalletDataCurrencyEnum 
 * @type {("USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR"|"Undefined"|"GVT"|"ETH"|"BTC"|"ADA")}
 */

/**
 * @typedef WalletDataCurrencyCcyEnum 
 * @type {("USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR"|"Undefined"|"GVT"|"ETH"|"BTC"|"ADA")}
 */



