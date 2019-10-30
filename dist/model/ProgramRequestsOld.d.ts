import { ProgramRequestOld } from './ProgramRequestOld';
export declare class ProgramRequestsOld {
    'requests'?: Array<ProgramRequestOld>;
    'total'?: number;
    'totalValue'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramRequestsOld): ProgramRequestsOld;
}
