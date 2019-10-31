import ApiClient from "../ApiClient";
export class FundAssetPercent {
    constructor(data) {
        this['asset'] = data['asset'];
        this['name'] = data['name'];
        this['percent'] = data['percent'];
        this['icon'] = data['icon'];
    }
    static constructFromObject(data) {
        return new FundAssetPercent({
            'asset': ApiClient.convertToType(data['asset'], 'string'),
            'name': ApiClient.convertToType(data['name'], 'string'),
            'percent': ApiClient.convertToType(data['percent'], 'number'),
            'icon': ApiClient.convertToType(data['icon'], 'string'),
        });
    }
}
