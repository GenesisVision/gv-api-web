import { SecureAlgorithm } from './SecureAlgorithm';
import ApiClient from "../ApiClient";
export class PowDetails {
    constructor(data) {
        this['secureAlgorithm'] = data['secureAlgorithm'];
        this['difficulty'] = data['difficulty'];
        this['nonce'] = data['nonce'];
    }
    static constructFromObject(data) {
        return new PowDetails({
            'secureAlgorithm': SecureAlgorithm.constructFromObject(data['secureAlgorithm']),
            'difficulty': ApiClient.convertToType(data['difficulty'], 'number'),
            'nonce': ApiClient.convertToType(data['nonce'], 'string'),
        });
    }
}
