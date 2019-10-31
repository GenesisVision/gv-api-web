import ApiClient from "../ApiClient";
export class SignalDataMaster {
    constructor(data) {
        this['login'] = data['login'];
        this['share'] = data['share'];
    }
    static constructFromObject(data) {
        if (data) {
            return new SignalDataMaster({
                'login': ApiClient.convertToType(data['login'], 'string'),
                'share': ApiClient.convertToType(data['share'], 'number'),
            });
        }
    }
}
