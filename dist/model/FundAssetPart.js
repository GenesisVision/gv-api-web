import ApiClient from "../ApiClient";
export class FundAssetPart {
    constructor(data) {
        this['id'] = data['id'];
        this['percent'] = data['percent'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FundAssetPart({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'percent': ApiClient.convertToType(data['percent'], 'number'),
            });
        }
    }
}
