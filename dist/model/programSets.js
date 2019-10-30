import { ProgramFacet } from './programFacet';
import ApiClient from "../ApiClient";
export class ProgramSets {
    constructor() {
    }
    static constructFromObject(data, obj = new ProgramSets()) {
        if (data) {
            if (data.hasOwnProperty('sets')) {
                obj['sets'] = ApiClient.convertToType(data['sets'], [ProgramFacet]);
            }
            if (data.hasOwnProperty('favoritesCount')) {
                obj['favoritesCount'] = ApiClient.convertToType(data['favoritesCount'], 'number');
            }
        }
        return obj;
    }
}
