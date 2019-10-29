import ApiClient from "../ApiClient";
export class RateModel {
    constructor() {
    }
    static constructFromObject(data, obj = new RateModel()) {
        if (data) {
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'number');
            }
        }
        return obj;
    }
}
