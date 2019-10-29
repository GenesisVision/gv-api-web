import ApiClient from "../ApiClient";
export class OrderProgramData {
    constructor() {
    }
    static constructFromObject(data, obj = new OrderProgramData()) {
        if (data) {
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'number');
            }
            if (data.hasOwnProperty('levelProgress')) {
                obj['levelProgress'] = ApiClient.convertToType(data['levelProgress'], 'number');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'string');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'string');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'string');
            }
        }
        return obj;
    }
}
