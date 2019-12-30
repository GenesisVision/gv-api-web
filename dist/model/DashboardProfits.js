import { DashboardTimeframeProfit } from './DashboardTimeframeProfit';
export class DashboardProfits {
    constructor(data) {
        this['day'] = data['day'];
        this['week'] = data['week'];
        this['month'] = data['month'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DashboardProfits({
                'day': DashboardTimeframeProfit.constructFromObject(data['day']),
                'week': DashboardTimeframeProfit.constructFromObject(data['week']),
                'month': DashboardTimeframeProfit.constructFromObject(data['month']),
            });
        }
    }
}
