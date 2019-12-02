import ApiClient from "../ApiClient";
export class RateModel {
    constructor(data) {
        this['rate'] = data['rate'];
    }
    static constructFromObject(data) {
        if (data) {
            return new RateModel({
                'rate': ApiClient.convertToType(data['rate'], 'number'),
            });
        }
    }
}
