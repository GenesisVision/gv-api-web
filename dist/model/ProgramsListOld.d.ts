import { ProgramDetailsOld } from './ProgramDetailsOld';
export declare class ProgramsListOld {
    'programs': Array<ProgramDetailsOld>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramsListOld;
}
