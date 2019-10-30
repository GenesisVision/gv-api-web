import { SocialLinkType } from './SocialLinkType';
import ApiClient from "../ApiClient";
export class UpdateSocialLinkViewModel {
    static constructFromObject(data, obj = new UpdateSocialLinkViewModel()) {
        if (data) {
            if (data.hasOwnProperty('type')) {
                obj['type'] = SocialLinkType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'string');
            }
        }
        return obj;
    }
}
