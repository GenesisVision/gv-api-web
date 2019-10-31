import { ExternalKeyViewModel } from './ExternalKeyViewModel';
import ApiClient from "../ApiClient";
export class ExternalKeysViewModel {
    constructor(data) {
        this['keys'] = data['keys'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        return new ExternalKeysViewModel({
            'keys': ApiClient.convertToType(data['keys'], [ExternalKeyViewModel]),
            'total': ApiClient.convertToType(data['total'], 'number'),
        });
    }
}
