import { ProgramDetailsOld } from './ProgramDetailsOld';
export declare class ProgramsListOld {
    'programs'?: Array<ProgramDetailsOld>;
    'total'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramsListOld): ProgramsListOld;
}
