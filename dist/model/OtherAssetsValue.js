import ApiClient from "../ApiClient";
export class OtherAssetsValue {
    constructor(data) {
        this['amount'] = data['amount'];
        this['value'] = data['value'];
        this['changePercent'] = data['changePercent'];
        this['changeValue'] = data['changeValue'];
    }
    static constructFromObject(data) {
        if (data) {
            return new OtherAssetsValue({
                'amount': ApiClient.convertToType(data['amount'], 'number'),
                'value': ApiClient.convertToType(data['value'], 'number'),
                'changePercent': ApiClient.convertToType(data['changePercent'], 'number'),
                'changeValue': ApiClient.convertToType(data['changeValue'], 'number'),
            });
        }
    }
}
