import { SocialLinkViewModel } from './SocialLinkViewModel';
import ApiClient from "../ApiClient";
export class SocialLinksViewModel {
    constructor(data) {
        this['socialLinks'] = data['socialLinks'];
    }
    static constructFromObject(data) {
        return new SocialLinksViewModel({
            'socialLinks': ApiClient.convertToType(data['socialLinks'], [SocialLinkViewModel]),
        });
    }
}
