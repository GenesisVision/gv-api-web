import ApiClient from "../ApiClient";
export class FundWithdrawInfoOld {
    constructor(data) {
        this['exitFee'] = data['exitFee'];
        this['title'] = data['title'];
        this['availableToWithdraw'] = data['availableToWithdraw'];
        this['rate'] = data['rate'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FundWithdrawInfoOld({
                'exitFee': ApiClient.convertToType(data['exitFee'], 'number'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'availableToWithdraw': ApiClient.convertToType(data['availableToWithdraw'], 'number'),
                'rate': ApiClient.convertToType(data['rate'], 'number'),
            });
        }
    }
}
