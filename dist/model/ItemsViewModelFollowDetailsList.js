import { FollowDetailsList } from './FollowDetailsList';
import ApiClient from "../ApiClient";
export class ItemsViewModelFollowDetailsList {
    constructor(data) {
        this['items'] = data['items'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ItemsViewModelFollowDetailsList({
                'items': ApiClient.convertToType(data['items'], [FollowDetailsList]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
