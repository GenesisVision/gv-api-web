import { DashboardProfits } from './dashboardProfits';
import ApiClient from "../ApiClient";
export class DashboardSummary {
    constructor() {
    }
    static constructFromObject(data, obj = new DashboardSummary()) {
        if (data) {
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
            if (data.hasOwnProperty('invested')) {
                obj['invested'] = ApiClient.convertToType(data['invested'], 'number');
            }
            if (data.hasOwnProperty('pending')) {
                obj['pending'] = ApiClient.convertToType(data['pending'], 'number');
            }
            if (data.hasOwnProperty('available')) {
                obj['available'] = ApiClient.convertToType(data['available'], 'number');
            }
            if (data.hasOwnProperty('profits')) {
                obj['profits'] = DashboardProfits.constructFromObject(data['profits']);
            }
        }
        return obj;
    }
}
