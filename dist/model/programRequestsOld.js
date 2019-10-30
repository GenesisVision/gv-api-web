import { ProgramRequestOld } from './programRequestOld';
import ApiClient from "../ApiClient";
export class ProgramRequestsOld {
    constructor() {
    }
    static constructFromObject(data, obj = new ProgramRequestsOld()) {
        if (data) {
            if (data.hasOwnProperty('requests')) {
                obj['requests'] = ApiClient.convertToType(data['requests'], [ProgramRequestOld]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
            if (data.hasOwnProperty('totalValue')) {
                obj['totalValue'] = ApiClient.convertToType(data['totalValue'], 'number');
            }
        }
        return obj;
    }
}
