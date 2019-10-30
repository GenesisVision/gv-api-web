import { RewardDetails } from './RewardDetails';
import ApiClient from "../ApiClient";
export class ItemsViewModelRewardDetails {
    static constructFromObject(data, obj = new ItemsViewModelRewardDetails()) {
        if (data) {
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [RewardDetails]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}
