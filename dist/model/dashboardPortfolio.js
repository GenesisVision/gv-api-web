import { MoneyLocation } from './moneyLocation';
import ApiClient from "../ApiClient";
export class DashboardPortfolio {
    constructor() {
    }
    static constructFromObject(data, obj = new DashboardPortfolio()) {
        if (data) {
            if (data.hasOwnProperty('distribution')) {
                obj['distribution'] = ApiClient.convertToType(data['distribution'], [MoneyLocation]);
            }
        }
        return obj;
    }
}
