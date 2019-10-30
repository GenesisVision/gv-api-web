import { ProgramFacet } from './ProgramFacet';
import ApiClient from "../ApiClient";
export class ProgramSets {
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
