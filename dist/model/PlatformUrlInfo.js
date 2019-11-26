import { PlatformUrlType } from './PlatformUrlType';
import ApiClient from "../ApiClient";
export class PlatformUrlInfo {
    constructor(data) {
        this['type'] = data['type'];
        this['url'] = data['url'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PlatformUrlInfo({
                'type': PlatformUrlType.constructFromObject(data['type']),
                'url': ApiClient.convertToType(data['url'], 'string'),
            });
        }
    }
}
