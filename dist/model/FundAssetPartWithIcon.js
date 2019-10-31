import ApiClient from "../ApiClient";
export class FundAssetPartWithIcon {
    constructor(data) {
        this['icon'] = data['icon'];
        this['color'] = data['color'];
        this['name'] = data['name'];
        this['asset'] = data['asset'];
        this['percent'] = data['percent'];
    }
    static constructFromObject(data) {
        return new FundAssetPartWithIcon({
            'icon': ApiClient.convertToType(data['icon'], 'string'),
            'color': ApiClient.convertToType(data['color'], 'string'),
            'name': ApiClient.convertToType(data['name'], 'string'),
            'asset': ApiClient.convertToType(data['asset'], 'string'),
            'percent': ApiClient.convertToType(data['percent'], 'number'),
        });
    }
}
