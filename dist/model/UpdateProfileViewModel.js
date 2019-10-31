import ApiClient from "../ApiClient";
export class UpdateProfileViewModel {
    constructor(data) {
        this['userName'] = data['userName'];
        this['about'] = data['about'];
    }
    static constructFromObject(data) {
        return new UpdateProfileViewModel({
            'userName': ApiClient.convertToType(data['userName'], 'string'),
            'about': ApiClient.convertToType(data['about'], 'string'),
        });
    }
}
