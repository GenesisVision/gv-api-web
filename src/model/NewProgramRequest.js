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
     * @interface NewProgramRequest
     */
    
    /**
     *
     * @name NewProgramRequest#currency
     * @type {("GVT"|"Undefined"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
     */
    /**
     *
     * @name NewProgramRequest#periodLength
     * @type {Number}
     */
    /**
     *
     * @name NewProgramRequest#successFee
     * @type {Number}
     */
    /**
     *
     * @name NewProgramRequest#stopOutLevel
     * @type {Number}
     */
    /**
     *
     * @name NewProgramRequest#leverage
     * @type {Number}
     */
    /**
     *
     * @name NewProgramRequest#brokerAccountTypeId
     * @type {String}
     */
    /**
     *
     * @name NewProgramRequest#title
     * @type {String}
     */
    /**
     *
     * @name NewProgramRequest#description
     * @type {String}
     */
    /**
     *
     * @name NewProgramRequest#logo
     * @type {String}
     */
    /**
     *
     * @name NewProgramRequest#entryFee
     * @type {Number}
     */





export default class NewProgramRequest {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewProgramRequest();

            
            
            

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('periodLength')) {
                obj['periodLength'] = ApiClient.convertToType(data['periodLength'], 'Number');
            }
            if (data.hasOwnProperty('successFee')) {
                obj['successFee'] = ApiClient.convertToType(data['successFee'], 'Number');
            }
            if (data.hasOwnProperty('stopOutLevel')) {
                obj['stopOutLevel'] = ApiClient.convertToType(data['stopOutLevel'], 'Number');
            }
            if (data.hasOwnProperty('leverage')) {
                obj['leverage'] = ApiClient.convertToType(data['leverage'], 'Number');
            }
            if (data.hasOwnProperty('brokerAccountTypeId')) {
                obj['brokerAccountTypeId'] = ApiClient.convertToType(data['brokerAccountTypeId'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('entryFee')) {
                obj['entryFee'] = ApiClient.convertToType(data['entryFee'], 'Number');
            }
        }
        return obj;
    }

    currency = undefined;
    periodLength = undefined;
    successFee = undefined;
    stopOutLevel = undefined;
    leverage = undefined;
    brokerAccountTypeId = undefined;
    title = undefined;
    description = undefined;
    logo = undefined;
    entryFee = undefined;






    static CurrencyEnum = {
    
        "GVT": "GVT",
    
        "Undefined": "Undefined",
    
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


