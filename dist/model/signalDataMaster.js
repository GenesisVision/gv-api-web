import ApiClient from "../ApiClient";
export class SignalDataMaster {
    constructor() {
    }
    static constructFromObject(data, obj = new SignalDataMaster()) {
        if (data) {
            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'string');
            }
            if (data.hasOwnProperty('share')) {
                obj['share'] = ApiClient.convertToType(data['share'], 'number');
            }
        }
        return obj;
    }
}
