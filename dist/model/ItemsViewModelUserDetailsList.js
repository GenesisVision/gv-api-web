import { UserDetailsList } from './UserDetailsList';
import ApiClient from "../ApiClient";
export class ItemsViewModelUserDetailsList {
    constructor(data) {
        this['items'] = data['items'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ItemsViewModelUserDetailsList({
                'items': ApiClient.convertToType(data['items'], [UserDetailsList]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
