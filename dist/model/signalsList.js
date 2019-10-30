import { SignalDetails } from './signalDetails';
import ApiClient from "../ApiClient";
export class SignalsList {
    constructor() {
    }
    static constructFromObject(data, obj = new SignalsList()) {
        if (data) {
            if (data.hasOwnProperty('programs')) {
                obj['programs'] = ApiClient.convertToType(data['programs'], [SignalDetails]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}
