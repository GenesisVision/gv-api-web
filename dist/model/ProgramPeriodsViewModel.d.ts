import { ProgramPeriodViewModel } from './ProgramPeriodViewModel';
export declare class ProgramPeriodsViewModel {
    'periods'?: Array<ProgramPeriodViewModel>;
    'total'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramPeriodsViewModel): ProgramPeriodsViewModel;
}
