import { SocialLinkType } from './socialLinkType';
import ApiClient from "../ApiClient";
export class SocialLinkViewModel {
    constructor() {
    }
    static constructFromObject(data, obj = new SocialLinkViewModel()) {
        if (data) {
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'string');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'string');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'string');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'string');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = SocialLinkType.constructFromObject(data['type']);
            }
        }
        return obj;
    }
}
