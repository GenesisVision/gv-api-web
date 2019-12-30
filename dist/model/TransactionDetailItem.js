import ApiClient from "../ApiClient";
export class TransactionDetailItem {
    constructor(data) {
        this['details'] = data['details'];
        this['url'] = data['url'];
        this['canCopy'] = data['canCopy'];
        this['title'] = data['title'];
    }
    static constructFromObject(data) {
        if (data) {
            return new TransactionDetailItem({
                'details': ApiClient.convertToType(data['details'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'canCopy': ApiClient.convertToType(data['canCopy'], 'boolean'),
                'title': ApiClient.convertToType(data['title'], 'string'),
            });
        }
    }
}
