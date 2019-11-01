import ApiClient from "../ApiClient";
export class NewExternalSignalAccountRequest {
    constructor(data) {
        this['externalKeyId'] = data['externalKeyId'];
        this['volumeFee'] = data['volumeFee'];
        this['monthlySubscriptionFee'] = data['monthlySubscriptionFee'];
        this['title'] = data['title'];
        this['description'] = data['description'];
        this['logo'] = data['logo'];
    }
    static constructFromObject(data) {
        if (data) {
            return new NewExternalSignalAccountRequest({
                'externalKeyId': ApiClient.convertToType(data['externalKeyId'], 'string'),
                'volumeFee': ApiClient.convertToType(data['volumeFee'], 'number'),
                'monthlySubscriptionFee': ApiClient.convertToType(data['monthlySubscriptionFee'], 'number'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
            });
        }
    }
}
