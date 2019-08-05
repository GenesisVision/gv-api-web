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
import FeeDetails from './FeeDetails';
import OrderModelSignalData from './OrderModelSignalData';
import OrderSignalProgramInfo from './OrderSignalProgramInfo';





/**
 *
 * @interface OrderSignalModel
 */

/**
 *
 * @name OrderSignalModel#providers
 * @type {Array<OrderSignalProgramInfo>}
 */
/**
 *
 * @name OrderSignalModel#totalCommission
 * @type {Number}
 */
/**
 *
 * @name OrderSignalModel#totalCommissionByType
 * @type {Array<FeeDetails>}
 */
/**
 *
 * @name OrderSignalModel#tradingAccountId
 * @type {String}
 */
/**
 *
 * @name OrderSignalModel#currency
 * @type OrderSignalModelCurrencyEnum
 */
/**
 *
 * @name OrderSignalModel#id
 * @type {String}
 */
/**
 *
 * @name OrderSignalModel#login
 * @type {String}
 */
/**
 *
 * @name OrderSignalModel#ticket
 * @type {String}
 */
/**
 *
 * @name OrderSignalModel#symbol
 * @type {String}
 */
/**
 *
 * @name OrderSignalModel#volume
 * @type {Number}
 */
/**
 *
 * @name OrderSignalModel#profit
 * @type {Number}
 */
/**
 *
 * @name OrderSignalModel#direction
 * @type OrderSignalModelDirectionEnum
 */
/**
 *
 * @name OrderSignalModel#date
 * @type {Date}
 */
/**
 *
 * @name OrderSignalModel#price
 * @type {Number}
 */
/**
 *
 * @name OrderSignalModel#priceCurrent
 * @type {Number}
 */
/**
 *
 * @name OrderSignalModel#entry
 * @type OrderSignalModelEntryEnum
 */
/**
 *
 * @name OrderSignalModel#baseVolume
 * @type {Number}
 */
/**
 *
 * @name OrderSignalModel#originalCommission
 * @type {Number}
 */
/**
 *
 * @name OrderSignalModel#originalCommissionCurrency
 * @type {String}
 */
/**
 *
 * @name OrderSignalModel#commission
 * @type {Number}
 */
/**
 *
 * @name OrderSignalModel#swap
 * @type {Number}
 */
/**
 *
 * @name OrderSignalModel#showOriginalCommission
 * @type {Boolean}
 */
/**
 *
 * @name OrderSignalModel#signalData
 * @type {OrderModelSignalData}
 */





export default class OrderSignalModel {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderSignalModel();

            
            
            

            if (data.hasOwnProperty('providers')) {
                obj['providers'] = ApiClient.convertToType(data['providers'], [OrderSignalProgramInfo]);
            }
            if (data.hasOwnProperty('totalCommission')) {
                obj['totalCommission'] = ApiClient.convertToType(data['totalCommission'], 'Number');
            }
            if (data.hasOwnProperty('totalCommissionByType')) {
                obj['totalCommissionByType'] = ApiClient.convertToType(data['totalCommissionByType'], [FeeDetails]);
            }
            if (data.hasOwnProperty('tradingAccountId')) {
                obj['tradingAccountId'] = ApiClient.convertToType(data['tradingAccountId'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'String');
            }
            if (data.hasOwnProperty('ticket')) {
                obj['ticket'] = ApiClient.convertToType(data['ticket'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('volume')) {
                obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
            }
            if (data.hasOwnProperty('profit')) {
                obj['profit'] = ApiClient.convertToType(data['profit'], 'Number');
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('priceCurrent')) {
                obj['priceCurrent'] = ApiClient.convertToType(data['priceCurrent'], 'Number');
            }
            if (data.hasOwnProperty('entry')) {
                obj['entry'] = ApiClient.convertToType(data['entry'], 'String');
            }
            if (data.hasOwnProperty('baseVolume')) {
                obj['baseVolume'] = ApiClient.convertToType(data['baseVolume'], 'Number');
            }
            if (data.hasOwnProperty('originalCommission')) {
                obj['originalCommission'] = ApiClient.convertToType(data['originalCommission'], 'Number');
            }
            if (data.hasOwnProperty('originalCommissionCurrency')) {
                obj['originalCommissionCurrency'] = ApiClient.convertToType(data['originalCommissionCurrency'], 'String');
            }
            if (data.hasOwnProperty('commission')) {
                obj['commission'] = ApiClient.convertToType(data['commission'], 'Number');
            }
            if (data.hasOwnProperty('swap')) {
                obj['swap'] = ApiClient.convertToType(data['swap'], 'Number');
            }
            if (data.hasOwnProperty('showOriginalCommission')) {
                obj['showOriginalCommission'] = ApiClient.convertToType(data['showOriginalCommission'], 'Boolean');
            }
            if (data.hasOwnProperty('signalData')) {
                obj['signalData'] = OrderModelSignalData.constructFromObject(data['signalData']);
            }
        }
        return obj;
    }

    providers = undefined;
    totalCommission = undefined;
    totalCommissionByType = undefined;
    tradingAccountId = undefined;
    currency = undefined;
    id = undefined;
    login = undefined;
    ticket = undefined;
    symbol = undefined;
    volume = undefined;
    profit = undefined;
    direction = undefined;
    date = undefined;
    price = undefined;
    priceCurrent = undefined;
    entry = undefined;
    baseVolume = undefined;
    originalCommission = undefined;
    originalCommissionCurrency = undefined;
    commission = undefined;
    swap = undefined;
    showOriginalCommission = undefined;
    signalData = undefined;






    static CurrencyEnum = {
    
        "BTC": "BTC",
    
        "ETH": "ETH",
    
        "USDT": "USDT",
    
        "GVT": "GVT",
    
        "Undefined": "Undefined",
    
        "ADA": "ADA",
    
        "XRP": "XRP",
    
        "BCH": "BCH",
    
        "LTC": "LTC",
    
        "DOGE": "DOGE",
    
        "BNB": "BNB",
    
        "USD": "USD",
    
        "EUR": "EUR"    
    };

    static DirectionEnum = {
    
        "Buy": "Buy",
    
        "Sell": "Sell",
    
        "Balance": "Balance",
    
        "Credit": "Credit",
    
        "Undefined": "Undefined",
    
        "ManualBalancing": "ManualBalancing"    
    };

    static EntryEnum = {
    
        "In": "In",
    
        "Out": "Out",
    
        "InOut": "InOut",
    
        "OutBy": "OutBy"    
    };



}




/**
 * @typedef OrderSignalModelCurrencyEnum 
 * @type {("BTC"|"ETH"|"USDT"|"GVT"|"Undefined"|"ADA"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */

/**
 * @typedef OrderSignalModelDirectionEnum 
 * @type {("Buy"|"Sell"|"Balance"|"Credit"|"Undefined"|"ManualBalancing")}
 */

/**
 * @typedef OrderSignalModelEntryEnum 
 * @type {("In"|"Out"|"InOut"|"OutBy")}
 */



