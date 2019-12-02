import { SocialLinkType } from './SocialLinkType';
import ApiClient from "../ApiClient";
export class UpdateSocialLinkViewModel {
    constructor(data) {
        this['type'] = data['type'];
        this['value'] = data['value'];
    }
    static constructFromObject(data) {
        if (data) {
            return new UpdateSocialLinkViewModel({
                'type': SocialLinkType.constructFromObject(data['type']),
                'value': ApiClient.convertToType(data['value'], 'string'),
            });
        }
    }
}
