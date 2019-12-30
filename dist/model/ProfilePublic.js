import { SocialLinkViewModel } from './SocialLinkViewModel';
import ApiClient from "../ApiClient";
export class ProfilePublic {
    constructor(data) {
        this['id'] = data['id'];
        this['username'] = data['username'];
        this['avatar'] = data['avatar'];
        this['registrationDate'] = data['registrationDate'];
        this['url'] = data['url'];
        this['socialLinks'] = data['socialLinks'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProfilePublic({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'username': ApiClient.convertToType(data['username'], 'string'),
                'avatar': ApiClient.convertToType(data['avatar'], 'string'),
                'registrationDate': ApiClient.convertToType(data['registrationDate'], 'Date'),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'socialLinks': ApiClient.convertToType(data['socialLinks'], [SocialLinkViewModel]),
            });
        }
    }
}
