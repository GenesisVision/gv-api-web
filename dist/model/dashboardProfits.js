import { DashboardTimeframeProfit } from './dashboardTimeframeProfit';
export class DashboardProfits {
    constructor() {
    }
    static constructFromObject(data, obj = new DashboardProfits()) {
        if (data) {
            if (data.hasOwnProperty('dayProfit')) {
                obj['dayProfit'] = DashboardTimeframeProfit.constructFromObject(data['dayProfit']);
            }
            if (data.hasOwnProperty('weekProfit')) {
                obj['weekProfit'] = DashboardTimeframeProfit.constructFromObject(data['weekProfit']);
            }
            if (data.hasOwnProperty('monthProfit')) {
                obj['monthProfit'] = DashboardTimeframeProfit.constructFromObject(data['monthProfit']);
            }
        }
        return obj;
    }
}
