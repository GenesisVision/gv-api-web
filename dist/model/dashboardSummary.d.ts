import { DashboardChartValue } from './dashboardChartValue';
import { ProfileHeaderViewModel } from './profileHeaderViewModel';
import { ProgramRequestsOld } from './programRequestsOld';
export declare class DashboardSummary {
    'chart'?: DashboardChartValue;
    'profileHeader'?: ProfileHeaderViewModel;
    'programsCount'?: number;
    'fundsCount'?: number;
    'signalsCount'?: number;
    'requests'?: ProgramRequestsOld;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: DashboardSummary): DashboardSummary;
}
