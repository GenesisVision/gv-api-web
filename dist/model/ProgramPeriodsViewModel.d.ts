import { ProgramPeriodViewModel } from './ProgramPeriodViewModel';
export declare class ProgramPeriodsViewModel {
    'periods': Array<ProgramPeriodViewModel>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramPeriodsViewModel | undefined;
}
