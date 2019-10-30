import { DashboardChartValue } from './DashboardChartValue';
import { ProfileHeaderViewModel } from './ProfileHeaderViewModel';
import { ProgramRequestsOld } from './ProgramRequestsOld';
import ApiClient from "../ApiClient";
export class DashboardSummary {
    static constructFromObject(data, obj = new DashboardSummary()) {
        if (data) {
            if (data.hasOwnProperty('chart')) {
                obj['chart'] = DashboardChartValue.constructFromObject(data['chart']);
            }
            if (data.hasOwnProperty('profileHeader')) {
                obj['profileHeader'] = ProfileHeaderViewModel.constructFromObject(data['profileHeader']);
            }
            if (data.hasOwnProperty('programsCount')) {
                obj['programsCount'] = ApiClient.convertToType(data['programsCount'], 'number');
            }
            if (data.hasOwnProperty('fundsCount')) {
                obj['fundsCount'] = ApiClient.convertToType(data['fundsCount'], 'number');
            }
            if (data.hasOwnProperty('signalsCount')) {
                obj['signalsCount'] = ApiClient.convertToType(data['signalsCount'], 'number');
            }
            if (data.hasOwnProperty('requests')) {
                obj['requests'] = ProgramRequestsOld.constructFromObject(data['requests']);
            }
        }
        return obj;
    }
}
