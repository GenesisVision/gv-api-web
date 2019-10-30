import { FundsListOld } from './FundsListOld';
import { ManagersListOld } from './ManagersListOld';
import { ProgramsListOld } from './ProgramsListOld';
export class SearchViewModelOld {
    static constructFromObject(data, obj = new SearchViewModelOld()) {
        if (data) {
            if (data.hasOwnProperty('programs')) {
                obj['programs'] = ProgramsListOld.constructFromObject(data['programs']);
            }
            if (data.hasOwnProperty('funds')) {
                obj['funds'] = FundsListOld.constructFromObject(data['funds']);
            }
            if (data.hasOwnProperty('managers')) {
                obj['managers'] = ManagersListOld.constructFromObject(data['managers']);
            }
        }
        return obj;
    }
}
