import ApiClient from "../ApiClient";
export class LevelInfo {
    constructor(data) {
        this['level'] = data['level'];
        this['investmentLimit'] = data['investmentLimit'];
    }
    static constructFromObject(data) {
        if (data) {
            return new LevelInfo({
                'level': ApiClient.convertToType(data['level'], 'number'),
                'investmentLimit': ApiClient.convertToType(data['investmentLimit'], 'number'),
            });
        }
    }
}
