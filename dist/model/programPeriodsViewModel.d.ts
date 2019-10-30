import { ProgramPeriodViewModel } from './programPeriodViewModel';
export declare class ProgramPeriodsViewModel {
    'periods'?: Array<ProgramPeriodViewModel>;
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramPeriodsViewModel): ProgramPeriodsViewModel;
}
