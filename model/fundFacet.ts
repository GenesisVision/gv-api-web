/**
 * Core API v2.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { FacetSortType } from './facetSortType';
import { FundsFilterSorting } from './fundsFilterSorting';
import { Timeframe } from './timeframe';

import ApiClient from "../ApiClient";

export class FundFacet { 
    public 'sorting'?: FundsFilterSorting;
    public 'id'?: string;
    public 'title'?: string;
    public 'description'?: string;
    public 'logo'?: string;
    public 'url'?: string;
    public 'sortType'?: FacetSortType;
    public 'timeframe'?: Timeframe;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: FundFacet = new FundFacet()): FundFacet {
        if (data) {
            if (data.hasOwnProperty('sorting')) {
                obj['sorting'] = FundsFilterSorting.constructFromObject(data['sorting']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'string');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'string');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'string');
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
}



//modelGenericEnums.mustache


