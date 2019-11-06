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
import FacetSortType from './FacetSortType';
import FundsFilterSorting from './FundsFilterSorting';
import Timeframe from './Timeframe';





/**
 *
 * @interface FundFacet
 */

/**
 *
 * @name FundFacet#sorting
 * @type {FundsFilterSorting}
 */
/**
 *
 * @name FundFacet#id
 * @type {String}
 */
/**
 *
 * @name FundFacet#title
 * @type {String}
 */
/**
 *
 * @name FundFacet#description
 * @type {String}
 */
/**
 *
 * @name FundFacet#logo
 * @type {String}
 */
/**
 *
 * @name FundFacet#url
 * @type {String}
 */
/**
 *
 * @name FundFacet#sortType
 * @type {FacetSortType}
 */
/**
 *
 * @name FundFacet#timeframe
 * @type {Timeframe}
 */





export default class FundFacet {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FundFacet();

            
            
            

            if (data.hasOwnProperty('sorting')) {
                obj['sorting'] = FundsFilterSorting.constructFromObject(data['sorting']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
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
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('sortType')) {
                obj['sortType'] = FacetSortType.constructFromObject(data['sortType']);
            }
            if (data.hasOwnProperty('timeframe')) {
                obj['timeframe'] = Timeframe.constructFromObject(data['timeframe']);
            }
        }
        return obj;
    }

    sorting = undefined;
    id = undefined;
    title = undefined;
    description = undefined;
    logo = undefined;
    url = undefined;
    sortType = undefined;
    timeframe = undefined;








}





