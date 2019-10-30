import { SocialLinkViewModel } from './socialLinkViewModel';
import ApiClient from "../ApiClient";
export class SocialLinksViewModel {
    constructor() {
    }
    static constructFromObject(data, obj = new SocialLinksViewModel()) {
        if (data) {
            if (data.hasOwnProperty('socialLinks')) {
                obj['socialLinks'] = ApiClient.convertToType(data['socialLinks'], [SocialLinkViewModel]);
            }
        }
        return obj;
    }
}
