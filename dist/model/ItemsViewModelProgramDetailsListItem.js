import { ProgramDetailsListItem } from './ProgramDetailsListItem';
import ApiClient from "../ApiClient";
export class ItemsViewModelProgramDetailsListItem {
    constructor(data) {
        this['items'] = data['items'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ItemsViewModelProgramDetailsListItem({
                'items': ApiClient.convertToType(data['items'], [ProgramDetailsListItem]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
