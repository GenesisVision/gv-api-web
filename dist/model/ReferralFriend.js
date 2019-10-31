import ApiClient from "../ApiClient";
export class ReferralFriend {
    constructor(data) {
        this['date'] = data['date'];
        this['emailMask'] = data['emailMask'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ReferralFriend({
                'date': ApiClient.convertToType(data['date'], 'Date'),
                'emailMask': ApiClient.convertToType(data['emailMask'], 'string'),
            });
        }
    }
}
