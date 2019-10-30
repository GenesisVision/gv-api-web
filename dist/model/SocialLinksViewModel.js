import { SocialLinkViewModel } from './SocialLinkViewModel';
import ApiClient from "../ApiClient";
export class SocialLinksViewModel {
    static constructFromObject(data, obj = new SocialLinksViewModel()) {
        if (data) {
            if (data.hasOwnProperty('socialLinks')) {
                obj['socialLinks'] = ApiClient.convertToType(data['socialLinks'], [SocialLinkViewModel]);
            }
        }
        return obj;
    }
}
