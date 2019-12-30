import { ProgramInvestingDetailsList } from './ProgramInvestingDetailsList';
import ApiClient from "../ApiClient";
export class ItemsViewModelProgramInvestingDetailsList {
    constructor(data) {
        this['items'] = data['items'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ItemsViewModelProgramInvestingDetailsList({
                'items': ApiClient.convertToType(data['items'], [ProgramInvestingDetailsList]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
