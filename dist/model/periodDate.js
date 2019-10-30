import ApiClient from "../ApiClient";
export class PeriodDate {
    constructor() {
    }
    static constructFromObject(data, obj = new PeriodDate()) {
        if (data) {
            if (data.hasOwnProperty('dateFrom')) {
                obj['dateFrom'] = ApiClient.convertToType(data['dateFrom'], 'Date');
            }
            if (data.hasOwnProperty('dateTo')) {
                obj['dateTo'] = ApiClient.convertToType(data['dateTo'], 'Date');
            }
        }
        return obj;
    }
}
