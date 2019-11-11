import ApiClient from "../ApiClient";
export class TransactionDetailItem {
    constructor(data) {
        this['details'] = data['details'];
        this['title'] = data['title'];
    }
    static constructFromObject(data) {
        if (data) {
            return new TransactionDetailItem({
                'details': ApiClient.convertToType(data['details'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
            });
        }
    }
}
