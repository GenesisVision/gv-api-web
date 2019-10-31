import ApiClient from "../ApiClient";
export class DashboardAsset {
    constructor(data) {
        this['asset'] = data['asset'];
        this['color'] = data['color'];
        this['percent'] = data['percent'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DashboardAsset({
                'asset': ApiClient.convertToType(data['asset'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'percent': ApiClient.convertToType(data['percent'], 'number'),
            });
        }
    }
}
