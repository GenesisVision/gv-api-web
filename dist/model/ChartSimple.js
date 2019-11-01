import ApiClient from "../ApiClient";
export class ChartSimple {
    constructor(data) {
        this['value'] = data['value'];
        this['date'] = data['date'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ChartSimple({
                'value': ApiClient.convertToType(data['value'], 'number'),
                'date': ApiClient.convertToType(data['date'], 'Date'),
            });
        }
    }
}
