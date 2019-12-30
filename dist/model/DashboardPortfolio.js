import { MoneyLocation } from './MoneyLocation';
import ApiClient from "../ApiClient";
export class DashboardPortfolio {
    constructor(data) {
        this['distribution'] = data['distribution'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DashboardPortfolio({
                'distribution': ApiClient.convertToType(data['distribution'], [MoneyLocation]),
            });
        }
    }
}
