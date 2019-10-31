import { DashboardTimeframeProfit } from './DashboardTimeframeProfit';
export class DashboardProfits {
    constructor(data) {
        this['dayProfit'] = data['dayProfit'];
        this['weekProfit'] = data['weekProfit'];
        this['monthProfit'] = data['monthProfit'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DashboardProfits({
                'dayProfit': DashboardTimeframeProfit.constructFromObject(data['dayProfit']),
                'weekProfit': DashboardTimeframeProfit.constructFromObject(data['weekProfit']),
                'monthProfit': DashboardTimeframeProfit.constructFromObject(data['monthProfit']),
            });
        }
    }
}
