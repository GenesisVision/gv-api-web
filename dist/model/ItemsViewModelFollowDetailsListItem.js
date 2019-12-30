import { FollowDetailsListItem } from './FollowDetailsListItem';
import ApiClient from "../ApiClient";
export class ItemsViewModelFollowDetailsListItem {
    constructor(data) {
        this['items'] = data['items'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ItemsViewModelFollowDetailsListItem({
                'items': ApiClient.convertToType(data['items'], [FollowDetailsListItem]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
