import { FundFacet } from './FundFacet';
import ApiClient from "../ApiClient";
export class FundSets {
    static constructFromObject(data, obj = new FundSets()) {
        if (data) {
            if (data.hasOwnProperty('sets')) {
                obj['sets'] = ApiClient.convertToType(data['sets'], [FundFacet]);
            }
            if (data.hasOwnProperty('favoritesCount')) {
                obj['favoritesCount'] = ApiClient.convertToType(data['favoritesCount'], 'number');
            }
        }
        return obj;
    }
}
