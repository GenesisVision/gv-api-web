import { ProgramPeriodViewModel } from './ProgramPeriodViewModel';
import ApiClient from "../ApiClient";
export class ProgramPeriodsViewModel {
    constructor(data) {
        this['periods'] = data['periods'];
        this['total'] = data['total'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramPeriodsViewModel({
                'periods': ApiClient.convertToType(data['periods'], [ProgramPeriodViewModel]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}
