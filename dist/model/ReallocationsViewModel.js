import { ReallocationModel } from './ReallocationModel';
import ApiClient from "../ApiClient";
export class ReallocationsViewModel {
    constructor(data) {
        this['reallocations'] = data['reallocations'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        return new ReallocationsViewModel({
            'reallocations': ApiClient.convertToType(data['reallocations'], [ReallocationModel]),
            'total': ApiClient.convertToType(data['total'], 'number'),
        });
    }
}
