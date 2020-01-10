import ApiClient from "../ApiClient";
export class TradingAccountDemoDeposit {
    constructor(data) {
        this['amount'] = data['amount'];
    }
    static constructFromObject(data) {
        if (data) {
            return new TradingAccountDemoDeposit({
                'amount': ApiClient.convertToType(data['amount'], 'number'),
            });
        }
    }
}
