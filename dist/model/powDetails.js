import { SecureAlgorithm } from './secureAlgorithm';
import ApiClient from "../ApiClient";
export class PowDetails {
    constructor() {
    }
    static constructFromObject(data, obj = new PowDetails()) {
        if (data) {
            if (data.hasOwnProperty('secureAlgorithm')) {
                obj['secureAlgorithm'] = SecureAlgorithm.constructFromObject(data['secureAlgorithm']);
            }
            if (data.hasOwnProperty('difficulty')) {
                obj['difficulty'] = ApiClient.convertToType(data['difficulty'], 'number');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'string');
            }
        }
        return obj;
    }
}
