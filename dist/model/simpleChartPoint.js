import ApiClient from "../ApiClient";
export class SimpleChartPoint {
    constructor() {
    }
    static constructFromObject(data, obj = new SimpleChartPoint()) {
        if (data) {
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'number');
            }
        }
        return obj;
    }
}
