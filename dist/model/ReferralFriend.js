import ApiClient from "../ApiClient";
export class ReferralFriend {
    static constructFromObject(data, obj = new ReferralFriend()) {
        if (data) {
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('emailMask')) {
                obj['emailMask'] = ApiClient.convertToType(data['emailMask'], 'string');
            }
        }
        return obj;
    }
}
