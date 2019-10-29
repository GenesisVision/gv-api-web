import ApiClient from "../ApiClient";
export class DashboardAsset {
    constructor() {
    }
    static constructFromObject(data, obj = new DashboardAsset()) {
        if (data) {
            if (data.hasOwnProperty('asset')) {
                obj['asset'] = ApiClient.convertToType(data['asset'], 'string');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'string');
            }
            if (data.hasOwnProperty('percent')) {
                obj['percent'] = ApiClient.convertToType(data['percent'], 'number');
            }
        }
        return obj;
    }
}
