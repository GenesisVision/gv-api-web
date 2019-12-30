import { DashboardProfits } from './DashboardProfits';
import ApiClient from "../ApiClient";
export class DashboardSummary {
    constructor(data) {
        this['invested'] = data['invested'];
        this['trading'] = data['trading'];
        this['wallets'] = data['wallets'];
        this['total'] = data['total'];
        this['profits'] = data['profits'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DashboardSummary({
                'invested': ApiClient.convertToType(data['invested'], 'number'),
                'trading': ApiClient.convertToType(data['trading'], 'number'),
                'wallets': ApiClient.convertToType(data['wallets'], 'number'),
                'total': ApiClient.convertToType(data['total'], 'number'),
                'profits': DashboardProfits.constructFromObject(data['profits']),
            });
        }
    }
}
