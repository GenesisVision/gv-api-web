import { ProgramDetailsOld } from './ProgramDetailsOld';
import ApiClient from "../ApiClient";
export class ProgramsListOld {
    constructor(data) {
        this['programs'] = data['programs'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        return new ProgramsListOld({
            'programs': ApiClient.convertToType(data['programs'], [ProgramDetailsOld]),
            'total': ApiClient.convertToType(data['total'], 'number'),
        });
    }
}
