import ApiClient from "../ApiClient";
export class PlatformCurrencyOld {
    constructor(data) {
        this['name'] = data['name'];
        this['rateToGvt'] = data['rateToGvt'];
        this['color'] = data['color'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PlatformCurrencyOld({
                'name': ApiClient.convertToType(data['name'], 'string'),
                'rateToGvt': ApiClient.convertToType(data['rateToGvt'], 'number'),
                'color': ApiClient.convertToType(data['color'], 'string'),
            });
        }
    }
}
