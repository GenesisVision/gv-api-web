import ApiClient from "../ApiClient";
export class DashboardAsset {
    constructor(data) {
        this['name'] = data['name'];
        this['color'] = data['color'];
        this['percent'] = data['percent'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DashboardAsset({
                'name': ApiClient.convertToType(data['name'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'percent': ApiClient.convertToType(data['percent'], 'number'),
            });
        }
    }
}
