import ApiClient from "../ApiClient";
export class TransactionDetail {
    constructor(data) {
        this['title'] = data['title'];
        this['details'] = data['details'];
    }
    static constructFromObject(data) {
        if (data) {
            return new TransactionDetail({
                'title': ApiClient.convertToType(data['title'], 'string'),
                'details': ApiClient.convertToType(data['details'], 'string'),
            });
        }
    }
}
