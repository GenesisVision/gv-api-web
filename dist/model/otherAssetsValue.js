import ApiClient from "../ApiClient";
export class OtherAssetsValue {
    constructor() {
    }
    static constructFromObject(data, obj = new OtherAssetsValue()) {
        if (data) {
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'number');
            }
            if (data.hasOwnProperty('changePercent')) {
                obj['changePercent'] = ApiClient.convertToType(data['changePercent'], 'number');
            }
            if (data.hasOwnProperty('changeValue')) {
                obj['changeValue'] = ApiClient.convertToType(data['changeValue'], 'number');
            }
        }
        return obj;
    }
}
