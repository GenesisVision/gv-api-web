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
import ProgramBalanceChartElement from './ProgramBalanceChartElement';





    /**
     *
     * @interface ProgramBalanceChart
     */
    
    /**
     *
     * @name ProgramBalanceChart#programCurrencyBalance
     * @type {Number}
     */
    /**
     *
     * @name ProgramBalanceChart#programCurrency
     * @type {("USD"|"ETH"|"Undefined"|"GVT"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"EUR")}
     */
    /**
     *
     * @name ProgramBalanceChart#balanceChart
     * @type {Array<ProgramBalanceChartElement>}
     */
    /**
     *
     * @name ProgramBalanceChart#gvtBalance
     * @type {Number}
     */





export default class ProgramBalanceChart {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramBalanceChart();

            
            
            

            if (data.hasOwnProperty('programCurrencyBalance')) {
                obj['programCurrencyBalance'] = ApiClient.convertToType(data['programCurrencyBalance'], 'Number');
            }
            if (data.hasOwnProperty('programCurrency')) {
                obj['programCurrency'] = ApiClient.convertToType(data['programCurrency'], 'String');
            }
            if (data.hasOwnProperty('balanceChart')) {
                obj['balanceChart'] = ApiClient.convertToType(data['balanceChart'], [ProgramBalanceChartElement]);
            }
            if (data.hasOwnProperty('gvtBalance')) {
                obj['gvtBalance'] = ApiClient.convertToType(data['gvtBalance'], 'Number');
            }
        }
        return obj;
    }

    programCurrencyBalance = undefined;
    programCurrency = undefined;
    balanceChart = undefined;
    gvtBalance = undefined;






    static ProgramCurrencyEnum = {
    
        "USD": "USD",
    
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
    
        "EUR": "EUR"    
    };



}


