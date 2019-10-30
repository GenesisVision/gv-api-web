import { ReallocationModel } from './reallocationModel';
import ApiClient from "../ApiClient";
export class ReallocationsViewModel {
    constructor() {
    }
    static constructFromObject(data, obj = new ReallocationsViewModel()) {
        if (data) {
            if (data.hasOwnProperty('reallocations')) {
                obj['reallocations'] = ApiClient.convertToType(data['reallocations'], [ReallocationModel]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}
