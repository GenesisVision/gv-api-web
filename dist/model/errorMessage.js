import ApiClient from "../ApiClient";
export class ErrorMessage {
    constructor() {
    }
    static constructFromObject(data, obj = new ErrorMessage()) {
        if (data) {
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'string');
            }
            if (data.hasOwnProperty('property')) {
                obj['property'] = ApiClient.convertToType(data['property'], 'string');
            }
        }
        return obj;
    }
}
