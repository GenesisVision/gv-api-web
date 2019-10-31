import { ProgramFacet } from './ProgramFacet';
import ApiClient from "../ApiClient";
export class ProgramSets {
    constructor(data) {
        this['sets'] = data['sets'];
        this['favoritesCount'] = data['favoritesCount'];
    }
    static constructFromObject(data) {
        return new ProgramSets({
            'sets': ApiClient.convertToType(data['sets'], [ProgramFacet]),
            'favoritesCount': ApiClient.convertToType(data['favoritesCount'], 'number'),
        });
    }
}
