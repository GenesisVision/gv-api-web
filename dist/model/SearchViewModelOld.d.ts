import { FundsListOld } from './FundsListOld';
import { ManagersListOld } from './ManagersListOld';
import { ProgramsListOld } from './ProgramsListOld';
export declare class SearchViewModelOld {
    'programs'?: ProgramsListOld;
    'funds'?: FundsListOld;
    'managers'?: ManagersListOld;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: SearchViewModelOld): SearchViewModelOld;
}
