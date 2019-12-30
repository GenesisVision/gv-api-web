import ApiClient from "../ApiClient";
export class FundWithdrawInfo {
    constructor(data) {
        this['exitFee'] = data['exitFee'];
        this['title'] = data['title'];
        this['availableToWithdraw'] = data['availableToWithdraw'];
        this['isOwner'] = data['isOwner'];
        this['withheldInvestment'] = data['withheldInvestment'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FundWithdrawInfo({
                'exitFee': ApiClient.convertToType(data['exitFee'], 'number'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'availableToWithdraw': ApiClient.convertToType(data['availableToWithdraw'], 'number'),
                'isOwner': ApiClient.convertToType(data['isOwner'], 'boolean'),
                'withheldInvestment': ApiClient.convertToType(data['withheldInvestment'], 'number'),
            });
        }
    }
}
