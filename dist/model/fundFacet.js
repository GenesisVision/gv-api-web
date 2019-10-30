import { FacetSortType } from './facetSortType';
import { FundsFilterSorting } from './fundsFilterSorting';
import { Timeframe } from './timeframe';
import ApiClient from "../ApiClient";
export class FundFacet {
    constructor() {
    }
    static constructFromObject(data, obj = new FundFacet()) {
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
