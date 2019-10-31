import { SignalDetails } from './SignalDetails';
import ApiClient from "../ApiClient";
export class SignalsList {
    constructor(data) {
        this['programs'] = data['programs'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        return new SignalsList({
            'programs': ApiClient.convertToType(data['programs'], [SignalDetails]),
            'total': ApiClient.convertToType(data['total'], 'number'),
        });
    }
}
