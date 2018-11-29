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
import PersonalProgramDetailsFull from './PersonalProgramDetailsFull';
import ProfilePublic from './ProfilePublic';
import ProgramDetailsRating from './ProgramDetailsRating';
import ProgramStatistic from './ProgramStatistic';





/**
* The ProgramDetailsFull model module.
* @module model/ProgramDetailsFull
* @version v1.0
*/
export default class ProgramDetailsFull {
    /**
    * Constructs a new <code>ProgramDetailsFull</code>.
    * @alias module:model/ProgramDetailsFull
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ProgramDetailsFull</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProgramDetailsFull} obj Optional instance to populate.
    * @return {module:model/ProgramDetailsFull} The populated <code>ProgramDetailsFull</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramDetailsFull();

            
            
            

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'Number');
            }
            if (data.hasOwnProperty('periodDuration')) {
                obj['periodDuration'] = ApiClient.convertToType(data['periodDuration'], 'Number');
            }
            if (data.hasOwnProperty('periodStarts')) {
                obj['periodStarts'] = ApiClient.convertToType(data['periodStarts'], 'Date');
            }
            if (data.hasOwnProperty('periodEnds')) {
                obj['periodEnds'] = ApiClient.convertToType(data['periodEnds'], 'Date');
            }
            if (data.hasOwnProperty('entryFee')) {
                obj['entryFee'] = ApiClient.convertToType(data['entryFee'], 'Number');
            }
            if (data.hasOwnProperty('successFee')) {
                obj['successFee'] = ApiClient.convertToType(data['successFee'], 'Number');
            }
            if (data.hasOwnProperty('isReinvesting')) {
                obj['isReinvesting'] = ApiClient.convertToType(data['isReinvesting'], 'Boolean');
            }
            if (data.hasOwnProperty('availableInvestment')) {
                obj['availableInvestment'] = ApiClient.convertToType(data['availableInvestment'], 'Number');
            }
            if (data.hasOwnProperty('statistic')) {
                obj['statistic'] = ProgramStatistic.constructFromObject(data['statistic']);
            }
            if (data.hasOwnProperty('rating')) {
                obj['rating'] = ProgramDetailsRating.constructFromObject(data['rating']);
            }
            if (data.hasOwnProperty('personalProgramDetails')) {
                obj['personalProgramDetails'] = PersonalProgramDetailsFull.constructFromObject(data['personalProgramDetails']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('ipfsHash')) {
                obj['ipfsHash'] = ApiClient.convertToType(data['ipfsHash'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('manager')) {
                obj['manager'] = ProfilePublic.constructFromObject(data['manager']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/ProgramDetailsFull.CurrencyEnum} currency
    */
    currency = undefined;
    /**
    * @member {Number} level
    */
    level = undefined;
    /**
    * @member {Number} periodDuration
    */
    periodDuration = undefined;
    /**
    * @member {Date} periodStarts
    */
    periodStarts = undefined;
    /**
    * @member {Date} periodEnds
    */
    periodEnds = undefined;
    /**
    * @member {Number} entryFee
    */
    entryFee = undefined;
    /**
    * @member {Number} successFee
    */
    successFee = undefined;
    /**
    * @member {Boolean} isReinvesting
    */
    isReinvesting = undefined;
    /**
    * @member {Number} availableInvestment
    */
    availableInvestment = undefined;
    /**
    * @member {module:model/ProgramStatistic} statistic
    */
    statistic = undefined;
    /**
    * @member {module:model/ProgramDetailsRating} rating
    */
    rating = undefined;
    /**
    * Fields for authorized user
    * @member {module:model/PersonalProgramDetailsFull} personalProgramDetails
    */
    personalProgramDetails = undefined;
    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {String} logo
    */
    logo = undefined;
    /**
    * @member {String} url
    */
    url = undefined;
    /**
    * @member {String} color
    */
    color = undefined;
    /**
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {String} title
    */
    title = undefined;
    /**
    * @member {String} ipfsHash
    */
    ipfsHash = undefined;
    /**
    * @member {module:model/ProgramDetailsFull.StatusEnum} status
    */
    status = undefined;
    /**
    * @member {module:model/ProfilePublic} manager
    */
    manager = undefined;






    /**
    * Allowed values for the <code>currency</code> property.
    * @enum {String}
    * @readonly
    */
    static CurrencyEnum = {
    
        /**
         * value: "Undefined"
         * @const
         */
        "Undefined": "Undefined",
    
        /**
         * value: "GVT"
         * @const
         */
        "GVT": "GVT",
    
        /**
         * value: "ETH"
         * @const
         */
        "ETH": "ETH",
    
        /**
         * value: "BTC"
         * @const
         */
        "BTC": "BTC",
    
        /**
         * value: "ADA"
         * @const
         */
        "ADA": "ADA",
    
        /**
         * value: "USDT"
         * @const
         */
        "USDT": "USDT",
    
        /**
         * value: "XRP"
         * @const
         */
        "XRP": "XRP",
    
        /**
         * value: "BCH"
         * @const
         */
        "BCH": "BCH",
    
        /**
         * value: "LTC"
         * @const
         */
        "LTC": "LTC",
    
        /**
         * value: "DOGE"
         * @const
         */
        "DOGE": "DOGE",
    
        /**
         * value: "USD"
         * @const
         */
        "USD": "USD",
    
        /**
         * value: "EUR"
         * @const
         */
        "EUR": "EUR"    
    };

    /**
    * Allowed values for the <code>status</code> property.
    * @enum {String}
    * @readonly
    */
    static StatusEnum = {
    
        /**
         * value: "None"
         * @const
         */
        "None": "None",
    
        /**
         * value: "Pending"
         * @const
         */
        "Pending": "Pending",
    
        /**
         * value: "ErrorCreating"
         * @const
         */
        "ErrorCreating": "ErrorCreating",
    
        /**
         * value: "Active"
         * @const
         */
        "Active": "Active",
    
        /**
         * value: "Closed"
         * @const
         */
        "Closed": "Closed",
    
        /**
         * value: "Archived"
         * @const
         */
        "Archived": "Archived",
    
        /**
         * value: "ClosedDueToInactivity"
         * @const
         */
        "ClosedDueToInactivity": "ClosedDueToInactivity"    
    };



}


