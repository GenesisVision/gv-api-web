import { RewardDetails } from './RewardDetails';
import ApiClient from "../ApiClient";
export class ItemsViewModelRewardDetails {
    constructor(data) {
        this['items'] = data['items'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ItemsViewModelRewardDetails({
                'items': ApiClient.convertToType(data['items'], [RewardDetails]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
