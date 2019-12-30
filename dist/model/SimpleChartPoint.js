import ApiClient from "../ApiClient";
export class SimpleChartPoint {
    constructor(data) {
        this['date'] = data['date'];
        this['value'] = data['value'];
    }
    static constructFromObject(data) {
        if (data) {
            return new SimpleChartPoint({
                'date': ApiClient.convertToType(data['date'], 'number'),
                'value': ApiClient.convertToType(data['value'], 'number'),
            });
        }
    }
}
