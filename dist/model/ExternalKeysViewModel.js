import { ExternalKeyViewModel } from './ExternalKeyViewModel';
import ApiClient from "../ApiClient";
export class ExternalKeysViewModel {
    static constructFromObject(data, obj = new ExternalKeysViewModel()) {
        if (data) {
            if (data.hasOwnProperty('keys')) {
                obj['keys'] = ApiClient.convertToType(data['keys'], [ExternalKeyViewModel]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}
