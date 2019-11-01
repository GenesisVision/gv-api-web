import ApiClient from "../ApiClient";
export class PlatformCurrencyInfo {
    constructor(data) {
        this['name'] = data['name'];
        this['color'] = data['color'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PlatformCurrencyInfo({
                'name': ApiClient.convertToType(data['name'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
            });
        }
    }
}
