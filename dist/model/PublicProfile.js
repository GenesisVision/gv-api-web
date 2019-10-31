import { SocialLinkViewModel } from './SocialLinkViewModel';
import ApiClient from "../ApiClient";
export class PublicProfile {
    constructor(data) {
        this['id'] = data['id'];
        this['username'] = data['username'];
        this['about'] = data['about'];
        this['avatar'] = data['avatar'];
        this['regDate'] = data['regDate'];
        this['assets'] = data['assets'];
        this['url'] = data['url'];
        this['socialLinks'] = data['socialLinks'];
    }
    static constructFromObject(data) {
        return new PublicProfile({
            'id': ApiClient.convertToType(data['id'], 'string'),
            'username': ApiClient.convertToType(data['username'], 'string'),
            'about': ApiClient.convertToType(data['about'], 'string'),
            'avatar': ApiClient.convertToType(data['avatar'], 'string'),
            'regDate': ApiClient.convertToType(data['regDate'], 'Date'),
            'assets': ApiClient.convertToType(data['assets'], ['string']),
            'url': ApiClient.convertToType(data['url'], 'string'),
            'socialLinks': ApiClient.convertToType(data['socialLinks'], [SocialLinkViewModel]),
        });
    }
}
