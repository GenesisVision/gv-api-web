import { ReallocationModel } from './ReallocationModel';
import ApiClient from "../ApiClient";
export class ItemsViewModelReallocationModel {
    constructor(data) {
        this['items'] = data['items'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ItemsViewModelReallocationModel({
                'items': ApiClient.convertToType(data['items'], [ReallocationModel]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
