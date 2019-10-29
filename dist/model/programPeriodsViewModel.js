import { ProgramPeriodViewModel } from './programPeriodViewModel';
import ApiClient from "../ApiClient";
export class ProgramPeriodsViewModel {
    constructor() {
    }
    static constructFromObject(data, obj = new ProgramPeriodsViewModel()) {
        if (data) {
            if (data.hasOwnProperty('periods')) {
                obj['periods'] = ApiClient.convertToType(data['periods'], [ProgramPeriodViewModel]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}
