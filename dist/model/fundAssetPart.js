import ApiClient from "../ApiClient";
export class FundAssetPart {
    constructor() {
    }
    static constructFromObject(data, obj = new FundAssetPart()) {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('percent')) {
                obj['percent'] = ApiClient.convertToType(data['percent'], 'number');
            }
        }
        return obj;
    }
}
