import { EventFilters } from './EventFilters';
export class Enums {
    constructor(data) {
        this['event'] = data['event'];
    }
    static constructFromObject(data) {
        if (data) {
            return new Enums({
                'event': EventFilters.constructFromObject(data['event']),
            });
        }
    }
}
