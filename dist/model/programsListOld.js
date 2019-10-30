import { ProgramDetailsOld } from './programDetailsOld';
import ApiClient from "../ApiClient";
export class ProgramsListOld {
    constructor() {
    }
    static constructFromObject(data, obj = new ProgramsListOld()) {
        if (data) {
            if (data.hasOwnProperty('programs')) {
                obj['programs'] = ApiClient.convertToType(data['programs'], [ProgramDetailsOld]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}
