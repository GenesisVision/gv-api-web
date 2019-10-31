import { DashboardChartValue } from './DashboardChartValue';
import { ProfileHeaderViewModel } from './ProfileHeaderViewModel';
import { ProgramRequestsOld } from './ProgramRequestsOld';
import ApiClient from "../ApiClient";
export class DashboardSummary {
    constructor(data) {
        this['chart'] = data['chart'];
        this['profileHeader'] = data['profileHeader'];
        this['programsCount'] = data['programsCount'];
        this['fundsCount'] = data['fundsCount'];
        this['signalsCount'] = data['signalsCount'];
        this['requests'] = data['requests'];
    }
    static constructFromObject(data) {
        return new DashboardSummary({
            'chart': DashboardChartValue.constructFromObject(data['chart']),
            'profileHeader': ProfileHeaderViewModel.constructFromObject(data['profileHeader']),
            'programsCount': ApiClient.convertToType(data['programsCount'], 'number'),
            'fundsCount': ApiClient.convertToType(data['fundsCount'], 'number'),
            'signalsCount': ApiClient.convertToType(data['signalsCount'], 'number'),
            'requests': ProgramRequestsOld.constructFromObject(data['requests']),
        });
    }
}
