import { FundsListOld } from './fundsListOld';
import { ManagersListOld } from './managersListOld';
import { ProgramsListOld } from './programsListOld';
export declare class SearchViewModelOld {
    'programs'?: ProgramsListOld;
    'funds'?: FundsListOld;
    'managers'?: ManagersListOld;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: SearchViewModelOld): SearchViewModelOld;
}
