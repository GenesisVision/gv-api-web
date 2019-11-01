import { PublicProfile } from './PublicProfile';
import ApiClient from "../ApiClient";
export class ManagersListOld {
    constructor(data) {
        this['managers'] = data['managers'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ManagersListOld({
                'managers': ApiClient.convertToType(data['managers'], [PublicProfile]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
