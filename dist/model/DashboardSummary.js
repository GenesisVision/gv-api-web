import { DashboardProfits } from './DashboardProfits';
import ApiClient from "../ApiClient";
export class DashboardSummary {
    constructor(data) {
        this['total'] = data['total'];
        this['invested'] = data['invested'];
        this['pending'] = data['pending'];
        this['available'] = data['available'];
        this['profits'] = data['profits'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DashboardSummary({
                'total': ApiClient.convertToType(data['total'], 'number'),
                'invested': ApiClient.convertToType(data['invested'], 'number'),
                'pending': ApiClient.convertToType(data['pending'], 'number'),
                'available': ApiClient.convertToType(data['available'], 'number'),
                'profits': DashboardProfits.constructFromObject(data['profits']),
            });
        }
    }
}
