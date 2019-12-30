import { PlatformEvent } from './PlatformEvent';
import ApiClient from "../ApiClient";
export class PlatformEvents {
    constructor(data) {
        this['events'] = data['events'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PlatformEvents({
                'events': ApiClient.convertToType(data['events'], [PlatformEvent]),
            });
        }
    }
}
