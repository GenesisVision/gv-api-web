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
import AssetDetails from './AssetDetails';
import FeeDetails from './FeeDetails';
import InvestmentEventItemViewModel from './InvestmentEventItemViewModel';





/**
 *
 * @interface InvestmentEventViewModel
 */

/**
 *
 * @name InvestmentEventViewModel#title
 * @type {String}
 */
/**
 *
 * @name InvestmentEventViewModel#icon
 * @type {String}
 */
/**
 *
 * @name InvestmentEventViewModel#date
 * @type {Date}
 */
/**
 *
 * @name InvestmentEventViewModel#assetDetails
 * @type {AssetDetails}
 */
/**
 *
 * @name InvestmentEventViewModel#amount
 * @type {Number}
 */
/**
 *
 * @name InvestmentEventViewModel#currency
 * @type InvestmentEventViewModelCurrencyEnum
 */
/**
 *
 * @name InvestmentEventViewModel#changeState
 * @type InvestmentEventViewModelChangeStateEnum
 */
/**
 *
 * @name InvestmentEventViewModel#extendedInfo
 * @type {Array<InvestmentEventItemViewModel>}
 */
/**
 *
 * @name InvestmentEventViewModel#feesInfo
 * @type {Array<FeeDetails>}
 */
/**
 *
 * @name InvestmentEventViewModel#totalFeesAmount
 * @type {Number}
 */
/**
 *
 * @name InvestmentEventViewModel#totalFeesCurrency
 * @type InvestmentEventViewModelTotalFeesCurrencyEnum
 */





export default class InvestmentEventViewModel {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvestmentEventViewModel();

            
            
            

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('assetDetails')) {
                obj['assetDetails'] = AssetDetails.constructFromObject(data['assetDetails']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('changeState')) {
                obj['changeState'] = ApiClient.convertToType(data['changeState'], 'String');
            }
            if (data.hasOwnProperty('extendedInfo')) {
                obj['extendedInfo'] = ApiClient.convertToType(data['extendedInfo'], [InvestmentEventItemViewModel]);
            }
            if (data.hasOwnProperty('feesInfo')) {
                obj['feesInfo'] = ApiClient.convertToType(data['feesInfo'], [FeeDetails]);
            }
            if (data.hasOwnProperty('totalFeesAmount')) {
                obj['totalFeesAmount'] = ApiClient.convertToType(data['totalFeesAmount'], 'Number');
            }
            if (data.hasOwnProperty('totalFeesCurrency')) {
                obj['totalFeesCurrency'] = ApiClient.convertToType(data['totalFeesCurrency'], 'String');
            }
        }
        return obj;
    }

    title = undefined;
    icon = undefined;
    date = undefined;
    assetDetails = undefined;
    amount = undefined;
    currency = undefined;
    changeState = undefined;
    extendedInfo = undefined;
    feesInfo = undefined;
    totalFeesAmount = undefined;
    totalFeesCurrency = undefined;






    static CurrencyEnum = {
    
        "Undefined": "Undefined",
    
        "GVT": "GVT",
    
        "ETH": "ETH",
    
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

    static ChangeStateEnum = {
    
        "Increased": "Increased",
    
        "Decreased": "Decreased",
    
        "NotChanged": "NotChanged"    
    };

    static TotalFeesCurrencyEnum = {
    
        "Undefined": "Undefined",
    
        "GVT": "GVT",
    
        "ETH": "ETH",
    
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



}




/**
 * @typedef InvestmentEventViewModelCurrencyEnum 
 * @type {("Undefined"|"GVT"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */

/**
 * @typedef InvestmentEventViewModelChangeStateEnum 
 * @type {("Increased"|"Decreased"|"NotChanged")}
 */

/**
 * @typedef InvestmentEventViewModelTotalFeesCurrencyEnum 
 * @type {("Undefined"|"GVT"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */



