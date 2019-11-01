import { DashboardChartValue } from './DashboardChartValue';
import { ProfileHeaderViewModel } from './ProfileHeaderViewModel';
import { ProgramRequestsOld } from './ProgramRequestsOld';
export declare class DashboardSummary {
    'chart': DashboardChartValue;
    'profileHeader': ProfileHeaderViewModel;
    'programsCount': number;
    'fundsCount': number;
    'signalsCount': number;
    'requests': ProgramRequestsOld;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DashboardSummary | undefined;
}
