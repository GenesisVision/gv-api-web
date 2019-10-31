import ApiClient from "../ApiClient";
export class ErrorMessage {
    constructor(data) {
        this['message'] = data['message'];
        this['property'] = data['property'];
    }
    static constructFromObject(data) {
        return new ErrorMessage({
            'message': ApiClient.convertToType(data['message'], 'string'),
            'property': ApiClient.convertToType(data['property'], 'string'),
        });
    }
}
