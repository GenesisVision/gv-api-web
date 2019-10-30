import { ProgramPeriodViewModel } from './programPeriodViewModel';
export declare class ProgramPeriodsViewModel {
    'periods'?: [ProgramPeriodViewModel];
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramPeriodsViewModel): ProgramPeriodsViewModel;
}
