import { ProgramDetailsList } from './programDetailsList';
import ApiClient from "../ApiClient";
export class ItemsViewModelProgramDetailsList {
    constructor() {
    }
    static constructFromObject(data, obj = new ItemsViewModelProgramDetailsList()) {
        if (data) {
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ProgramDetailsList]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}
