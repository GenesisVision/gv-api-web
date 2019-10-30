import ApiClient from "../ApiClient";
export class UpdateProfileViewModel {
    constructor() {
    }
    static constructFromObject(data, obj = new UpdateProfileViewModel()) {
        if (data) {
            if (data.hasOwnProperty('userName')) {
                obj['userName'] = ApiClient.convertToType(data['userName'], 'string');
            }
            if (data.hasOwnProperty('about')) {
                obj['about'] = ApiClient.convertToType(data['about'], 'string');
            }
        }
        return obj;
    }
}
