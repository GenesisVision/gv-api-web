import { ProgramRequestOld } from './ProgramRequestOld';
export declare class ProgramRequestsOld {
    'requests': Array<ProgramRequestOld>;
    'total': number;
    'totalValue': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramRequestsOld;
}
