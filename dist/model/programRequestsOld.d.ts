import { ProgramRequestOld } from './programRequestOld';
export declare class ProgramRequestsOld {
    'requests'?: [ProgramRequestOld];
    'total'?: number;
    'totalValue'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramRequestsOld): ProgramRequestsOld;
}
