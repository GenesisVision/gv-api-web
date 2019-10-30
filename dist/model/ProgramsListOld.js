import { ProgramDetailsOld } from './ProgramDetailsOld';
import ApiClient from "../ApiClient";
export class ProgramsListOld {
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
