import { ReferralFriend } from './ReferralFriend';
import ApiClient from "../ApiClient";
export class ItemsViewModelReferralFriend {
    static constructFromObject(data, obj = new ItemsViewModelReferralFriend()) {
        if (data) {
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ReferralFriend]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}
