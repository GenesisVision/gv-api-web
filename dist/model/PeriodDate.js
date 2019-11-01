import ApiClient from "../ApiClient";
export class PeriodDate {
    constructor(data) {
        this['dateFrom'] = data['dateFrom'];
        this['dateTo'] = data['dateTo'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PeriodDate({
                'dateFrom': ApiClient.convertToType(data['dateFrom'], 'Date'),
                'dateTo': ApiClient.convertToType(data['dateTo'], 'Date'),
            });
        }
    }
}
