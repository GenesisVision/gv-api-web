import { ProgramDetailsOld } from './programDetailsOld';
export declare class ProgramsListOld {
    'programs'?: [ProgramDetailsOld];
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramsListOld): ProgramsListOld;
}
