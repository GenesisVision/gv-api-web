import ApiClient from "../ApiClient";
export class ProfilePublicShort {
    constructor(data) {
        this['id'] = data['id'];
        this['username'] = data['username'];
        this['url'] = data['url'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProfilePublicShort({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'username': ApiClient.convertToType(data['username'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
            });
        }
    }
}
