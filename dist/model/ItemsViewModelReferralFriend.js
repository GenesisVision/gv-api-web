import { ReferralFriend } from './ReferralFriend';
import ApiClient from "../ApiClient";
export class ItemsViewModelReferralFriend {
    constructor(data) {
        this['items'] = data['items'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        return new ItemsViewModelReferralFriend({
            'items': ApiClient.convertToType(data['items'], [ReferralFriend]),
            'total': ApiClient.convertToType(data['total'], 'number'),
        });
    }
}
