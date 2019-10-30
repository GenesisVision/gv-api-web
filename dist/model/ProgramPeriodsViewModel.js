import { ProgramPeriodViewModel } from './ProgramPeriodViewModel';
import ApiClient from "../ApiClient";
export class ProgramPeriodsViewModel {
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
