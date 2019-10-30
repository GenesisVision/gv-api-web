import ApiClient from "../ApiClient";
export class PlatformCurrencyOld {
    constructor() {
    }
    static constructFromObject(data, obj = new PlatformCurrencyOld()) {
        if (data) {
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'string');
            }
            if (data.hasOwnProperty('rateToGvt')) {
                obj['rateToGvt'] = ApiClient.convertToType(data['rateToGvt'], 'number');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'string');
            }
        }
        return obj;
    }
}
