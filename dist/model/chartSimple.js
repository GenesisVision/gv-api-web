import ApiClient from "../ApiClient";
export class ChartSimple {
    constructor() {
    }
    static constructFromObject(data, obj = new ChartSimple()) {
        if (data) {
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'number');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
        }
        return obj;
    }
}
