import ApiClient from "../ApiClient";
export class FcmTokenViewModel {
    constructor(data) {
        this['token'] = data['token'];
    }
    static constructFromObject(data) {
        return new FcmTokenViewModel({
            'token': ApiClient.convertToType(data['token'], 'string'),
        });
    }
}
