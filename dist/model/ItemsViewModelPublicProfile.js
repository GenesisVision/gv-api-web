import { PublicProfile } from './PublicProfile';
import ApiClient from "../ApiClient";
export class ItemsViewModelPublicProfile {
    constructor(data) {
        this['items'] = data['items'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ItemsViewModelPublicProfile({
                'items': ApiClient.convertToType(data['items'], [PublicProfile]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
