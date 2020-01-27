import ApiClient from "../ApiClient";
export class FundAssetInfo {
    constructor(data) {
        this['asset'] = data['asset'];
        this['symbol'] = data['symbol'];
        this['icon'] = data['icon'];
        this['target'] = data['target'];
        this['current'] = data['current'];
        this['url'] = data['url'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FundAssetInfo({
                'asset': ApiClient.convertToType(data['asset'], 'string'),
                'symbol': ApiClient.convertToType(data['symbol'], 'string'),
                'icon': ApiClient.convertToType(data['icon'], 'string'),
                'target': ApiClient.convertToType(data['target'], 'number'),
                'current': ApiClient.convertToType(data['current'], 'number'),
                'url': ApiClient.convertToType(data['url'], 'string'),
            });
        }
    }
}
