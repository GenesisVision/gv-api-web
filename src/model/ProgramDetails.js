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
import PersonalProgramDetailsFull from './PersonalProgramDetailsFull';
import ProfilePublic from './ProfilePublic';
import ProgramDetailsListStatistic from './ProgramDetailsListStatistic';
import ProgramDetailsRating from './ProgramDetailsRating';





    /**
     *
     * @interface ProgramDetails
     */
    
    /**
     *
     * @name ProgramDetails#currency
     * @type {("ETH"|"BTC"|"Undefined"|"GVT"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
     */
    /**
     *
     * @name ProgramDetails#level
     * @type {Number}
     */
    /**
     *
     * @name ProgramDetails#periodDuration
     * @type {Number}
     */
    /**
     *
     * @name ProgramDetails#periodStarts
     * @type {Date}
     */
    /**
     *
     * @name ProgramDetails#periodEnds
     * @type {Date}
     */
    /**
     *
     * @name ProgramDetails#availableInvestment
     * @type {Number}
     */
    /**
     *
     * @name ProgramDetails#statistic
     * @type {ProgramDetailsListStatistic}
     */
    /**
     *
     * @name ProgramDetails#rating
     * @type {ProgramDetailsRating}
     */
    /**
     *
     * @name ProgramDetails#personalDetails
     * @type {PersonalProgramDetailsFull}
     */
    /**
     *
     * @name ProgramDetails#id
     * @type {String}
     */
    /**
     *
     * @name ProgramDetails#logo
     * @type {String}
     */
    /**
     *
     * @name ProgramDetails#url
     * @type {String}
     */
    /**
     *
     * @name ProgramDetails#color
     * @type {String}
     */
    /**
     *
     * @name ProgramDetails#title
     * @type {String}
     */
    /**
     *
     * @name ProgramDetails#description
     * @type {String}
     */
    /**
     *
     * @name ProgramDetails#status
     * @type {("None"|"Pending"|"ErrorCreating"|"Active"|"Closed"|"Archived"|"ClosedDueToInactivity")}
     */
    /**
     *
     * @name ProgramDetails#manager
     * @type {ProfilePublic}
     */
    /**
     *
     * @name ProgramDetails#chart
     * @type {Array<ChartSimple>}
     */
    /**
     *
     * @name ProgramDetails#dashboardAssetsDetails
     * @type {DashboardProgramDetails}
     */





export default class ProgramDetails {

    constructor() {
        

        
        

        

        
    }

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
            if (data.hasOwnProperty('rating')) {
                obj['rating'] = ProgramDetailsRating.constructFromObject(data['rating']);
            }
            if (data.hasOwnProperty('personalDetails')) {
                obj['personalDetails'] = PersonalProgramDetailsFull.constructFromObject(data['personalDetails']);
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

    currency = undefined;
    level = undefined;
    periodDuration = undefined;
    periodStarts = undefined;
    periodEnds = undefined;
    availableInvestment = undefined;
    statistic = undefined;
    rating = undefined;
    personalDetails = undefined;
    id = undefined;
    logo = undefined;
    url = undefined;
    color = undefined;
    title = undefined;
    description = undefined;
    status = undefined;
    manager = undefined;
    chart = undefined;
    dashboardAssetsDetails = undefined;






    static CurrencyEnum = {
    
        "ETH": "ETH",
    
        "BTC": "BTC",
    
        "Undefined": "Undefined",
    
        "GVT": "GVT",
    
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

    static StatusEnum = {
    
        "None": "None",
    
        "Pending": "Pending",
    
        "ErrorCreating": "ErrorCreating",
    
        "Active": "Active",
    
        "Closed": "Closed",
    
        "Archived": "Archived",
    
        "ClosedDueToInactivity": "ClosedDueToInactivity"    
    };



}


