import { PersonalFollowDetailsFull } from './PersonalFollowDetailsFull';
import ApiClient from "../ApiClient";
export class FollowDetailsFull {
    constructor(data) {
        this['currency'] = data['currency'];
        this['tradesCount'] = data['tradesCount'];
        this['leverage'] = data['leverage'];
        this['personalDetails'] = data['personalDetails'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FollowDetailsFull({
                'currency': ApiClient.convertToType(data['currency'], 'string'),
                'tradesCount': ApiClient.convertToType(data['tradesCount'], 'number'),
                'leverage': ApiClient.convertToType(data['leverage'], 'number'),
                'personalDetails': PersonalFollowDetailsFull.constructFromObject(data['personalDetails']),
            });
        }
    }
}
