import { FundsListOld } from './FundsListOld';
import { ManagersListOld } from './ManagersListOld';
import { ProgramsListOld } from './ProgramsListOld';
export declare class SearchViewModelOld {
    'programs': ProgramsListOld;
    'funds': FundsListOld;
    'managers': ManagersListOld;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): SearchViewModelOld;
}
