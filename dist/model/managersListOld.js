import { PublicProfile } from './publicProfile';
import ApiClient from "../ApiClient";
export class ManagersListOld {
    constructor() {
    }
    static constructFromObject(data, obj = new ManagersListOld()) {
        if (data) {
            if (data.hasOwnProperty('managers')) {
                obj['managers'] = ApiClient.convertToType(data['managers'], [PublicProfile]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}
