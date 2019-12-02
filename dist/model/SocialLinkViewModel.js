import { SocialLinkType } from './SocialLinkType';
import ApiClient from "../ApiClient";
export class SocialLinkViewModel {
    constructor(data) {
        this['url'] = data['url'];
        this['logo'] = data['logo'];
        this['name'] = data['name'];
        this['value'] = data['value'];
        this['type'] = data['type'];
    }
    static constructFromObject(data) {
        if (data) {
            return new SocialLinkViewModel({
                'url': ApiClient.convertToType(data['url'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'name': ApiClient.convertToType(data['name'], 'string'),
                'value': ApiClient.convertToType(data['value'], 'string'),
                'type': SocialLinkType.constructFromObject(data['type']),
            });
        }
    }
}
