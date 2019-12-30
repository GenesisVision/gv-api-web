import ApiClient from "../ApiClient";
export class TransactionDetailsActions {
    constructor(data) {
        this['canResend'] = data['canResend'];
        this['canCancel'] = data['canCancel'];
    }
    static constructFromObject(data) {
        if (data) {
            return new TransactionDetailsActions({
                'canResend': ApiClient.convertToType(data['canResend'], 'boolean'),
                'canCancel': ApiClient.convertToType(data['canCancel'], 'boolean'),
            });
        }
    }
}
