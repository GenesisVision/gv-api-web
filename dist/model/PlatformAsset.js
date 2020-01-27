import ApiClient from "../ApiClient";
export class PlatformAsset {
    constructor(data) {
        this['id'] = data['id'];
        this['name'] = data['name'];
        this['asset'] = data['asset'];
        this['description'] = data['description'];
        this['icon'] = data['icon'];
        this['color'] = data['color'];
        this['mandatoryFundPercent'] = data['mandatoryFundPercent'];
        this['url'] = data['url'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PlatformAsset({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'name': ApiClient.convertToType(data['name'], 'string'),
                'asset': ApiClient.convertToType(data['asset'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'icon': ApiClient.convertToType(data['icon'], 'string'),
                'color': ApiClient.convertToType(data['color'], 'string'),
                'mandatoryFundPercent': ApiClient.convertToType(data['mandatoryFundPercent'], 'number'),
                'url': ApiClient.convertToType(data['url'], 'string'),
            });
        }
    }
}
