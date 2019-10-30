import { SocialLinkViewModel } from './socialLinkViewModel';
import ApiClient from "../ApiClient";
export class PublicProfile {
    constructor() {
    }
    static constructFromObject(data, obj = new PublicProfile()) {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'string');
            }
            if (data.hasOwnProperty('about')) {
                obj['about'] = ApiClient.convertToType(data['about'], 'string');
            }
            if (data.hasOwnProperty('avatar')) {
                obj['avatar'] = ApiClient.convertToType(data['avatar'], 'string');
            }
            if (data.hasOwnProperty('regDate')) {
                obj['regDate'] = ApiClient.convertToType(data['regDate'], 'Date');
            }
            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], ['string']);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'string');
            }
            if (data.hasOwnProperty('socialLinks')) {
                obj['socialLinks'] = ApiClient.convertToType(data['socialLinks'], [SocialLinkViewModel]);
            }
        }
        return obj;
    }
}
