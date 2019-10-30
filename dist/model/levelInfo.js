import ApiClient from "../ApiClient";
export class LevelInfo {
    constructor() {
    }
    static constructFromObject(data, obj = new LevelInfo()) {
        if (data) {
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'number');
            }
            if (data.hasOwnProperty('investmentLimit')) {
                obj['investmentLimit'] = ApiClient.convertToType(data['investmentLimit'], 'number');
            }
        }
        return obj;
    }
}
