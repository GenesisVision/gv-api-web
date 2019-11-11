import { ProgramDetailsList } from './ProgramDetailsList';
import ApiClient from "../ApiClient";
export class ItemsViewModelProgramDetailsList {
    constructor(data) {
        this['items'] = data['items'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ItemsViewModelProgramDetailsList({
                'items': ApiClient.convertToType(data['items'], [ProgramDetailsList]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
