import ApiClient from "../ApiClient";
export class NewExternalSignalAccountRequest {
    constructor() {
    }
    static constructFromObject(data, obj = new NewExternalSignalAccountRequest()) {
        if (data) {
            if (data.hasOwnProperty('externalKeyId')) {
                obj['externalKeyId'] = ApiClient.convertToType(data['externalKeyId'], 'string');
            }
            if (data.hasOwnProperty('volumeFee')) {
                obj['volumeFee'] = ApiClient.convertToType(data['volumeFee'], 'number');
            }
            if (data.hasOwnProperty('monthlySubscriptionFee')) {
                obj['monthlySubscriptionFee'] = ApiClient.convertToType(data['monthlySubscriptionFee'], 'number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'string');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'string');
            }
        }
        return obj;
    }
}
