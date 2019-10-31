import { FundsListOld } from './FundsListOld';
import { ManagersListOld } from './ManagersListOld';
import { ProgramsListOld } from './ProgramsListOld';
export class SearchViewModelOld {
    constructor(data) {
        this['programs'] = data['programs'];
        this['funds'] = data['funds'];
        this['managers'] = data['managers'];
    }
    static constructFromObject(data) {
        return new SearchViewModelOld({
            'programs': ProgramsListOld.constructFromObject(data['programs']),
            'funds': FundsListOld.constructFromObject(data['funds']),
            'managers': ManagersListOld.constructFromObject(data['managers']),
        });
    }
}
