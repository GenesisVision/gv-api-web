import ApiClient from "../ApiClient";
export class PartnershipDetails {
    constructor() {
    }
    static constructFromObject(data, obj = new PartnershipDetails()) {
        if (data) {
            if (data.hasOwnProperty('totalReferralsL1')) {
                obj['totalReferralsL1'] = ApiClient.convertToType(data['totalReferralsL1'], 'number');
            }
            if (data.hasOwnProperty('totalReferralsL2')) {
                obj['totalReferralsL2'] = ApiClient.convertToType(data['totalReferralsL2'], 'number');
            }
            if (data.hasOwnProperty('totalAmount')) {
                obj['totalAmount'] = ApiClient.convertToType(data['totalAmount'], 'number');
            }
        }
        return obj;
    }
}
