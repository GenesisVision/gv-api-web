import { ReallocationModel } from './reallocationModel';
import ApiClient from "../ApiClient";
export class ItemsViewModelReallocationModel {
    constructor() {
    }
    static constructFromObject(data, obj = new ItemsViewModelReallocationModel()) {
        if (data) {
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ReallocationModel]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}
