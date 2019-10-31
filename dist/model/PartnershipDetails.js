import ApiClient from "../ApiClient";
export class PartnershipDetails {
    constructor(data) {
        this['totalReferralsL1'] = data['totalReferralsL1'];
        this['totalReferralsL2'] = data['totalReferralsL2'];
        this['totalAmount'] = data['totalAmount'];
    }
    static constructFromObject(data) {
        return new PartnershipDetails({
            'totalReferralsL1': ApiClient.convertToType(data['totalReferralsL1'], 'number'),
            'totalReferralsL2': ApiClient.convertToType(data['totalReferralsL2'], 'number'),
            'totalAmount': ApiClient.convertToType(data['totalAmount'], 'number'),
        });
    }
}
