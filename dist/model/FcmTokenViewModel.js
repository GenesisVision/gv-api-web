import ApiClient from "../ApiClient";
export class FcmTokenViewModel {
    constructor(data) {
        this['token'] = data['token'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FcmTokenViewModel({
                'token': ApiClient.convertToType(data['token'], 'string'),
            });
        }
    }
}
