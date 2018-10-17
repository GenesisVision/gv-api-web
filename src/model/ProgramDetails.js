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
import ChartSimple from './ChartSimple';
import DashboardProgramDetails from './DashboardProgramDetails';
import PersonalProgramDetailsList from './PersonalProgramDetailsList';
import ProfilePublic from './ProfilePublic';
import ProgramDetailsListStatistic from './ProgramDetailsListStatistic';





/**
* The ProgramDetails model module.
* @module model/ProgramDetails
* @version v1.0
*/
export default class ProgramDetails {
    /**
    * Constructs a new <code>ProgramDetails</code>.
    * @alias module:model/ProgramDetails
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ProgramDetails</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProgramDetails} obj Optional instance to populate.
    * @return {module:model/ProgramDetails} The populated <code>ProgramDetails</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramDetails();

            
            
            

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
            if (data.hasOwnProperty('availableInvestment')) {
                obj['availableInvestment'] = ApiClient.convertToType(data['availableInvestment'], 'Number');
            }
            if (data.hasOwnProperty('statistic')) {
                obj['statistic'] = ProgramDetailsListStatistic.constructFromObject(data['statistic']);
            }
            if (data.hasOwnProperty('personalDetails')) {
                obj['personalDetails'] = PersonalProgramDetailsList.constructFromObject(data['personalDetails']);
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
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('manager')) {
                obj['manager'] = ProfilePublic.constructFromObject(data['manager']);
            }
            if (data.hasOwnProperty('chart')) {
                obj['chart'] = ApiClient.convertToType(data['chart'], [ChartSimple]);
            }
            if (data.hasOwnProperty('dashboardAssetsDetails')) {
                obj['dashboardAssetsDetails'] = DashboardProgramDetails.constructFromObject(data['dashboardAssetsDetails']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/ProgramDetails.CurrencyEnum} currency
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
    * @member {Number} availableInvestment
    */
    availableInvestment = undefined;
    /**
    * @member {module:model/ProgramDetailsListStatistic} statistic
    */
    statistic = undefined;
    /**
    * Fields for authorized user
    * @member {module:model/PersonalProgramDetailsList} personalDetails
    */
    personalDetails = undefined;
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
    * @member {String} title
    */
    title = undefined;
    /**
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {module:model/ProgramDetails.StatusEnum} status
    */
    status = undefined;
    /**
    * @member {module:model/ProfilePublic} manager
    */
    manager = undefined;
    /**
    * @member {Array.<module:model/ChartSimple>} chart
    */
    chart = undefined;
    /**
    * Fields for dashboard
    * @member {module:model/DashboardProgramDetails} dashboardAssetsDetails
    */
    dashboardAssetsDetails = undefined;






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


