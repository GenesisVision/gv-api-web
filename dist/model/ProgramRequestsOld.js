import { ProgramRequestOld } from './ProgramRequestOld';
import ApiClient from "../ApiClient";
export class ProgramRequestsOld {
    constructor(data) {
        this['requests'] = data['requests'];
        this['total'] = data['total'];
        this['totalValue'] = data['totalValue'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramRequestsOld({
                'requests': ApiClient.convertToType(data['requests'], [ProgramRequestOld]),
                'total': ApiClient.convertToType(data['total'], 'number'),
                'totalValue': ApiClient.convertToType(data['totalValue'], 'number'),
            });
        }
    }
}
