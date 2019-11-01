import { FundFacet } from './FundFacet';
import ApiClient from "../ApiClient";
export class FundSets {
    constructor(data) {
        this['sets'] = data['sets'];
        this['favoritesCount'] = data['favoritesCount'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FundSets({
                'sets': ApiClient.convertToType(data['sets'], [FundFacet]),
                'favoritesCount': ApiClient.convertToType(data['favoritesCount'], 'number'),
            });
        }
    }
}
