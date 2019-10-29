import ApiClient from "../ApiClient";
export class FundWithdrawInfo {
    constructor() {
    }
    static constructFromObject(data, obj = new FundWithdrawInfo()) {
        if (data) {
            if (data.hasOwnProperty('exitFee')) {
                obj['exitFee'] = ApiClient.convertToType(data['exitFee'], 'number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('availableToWithdraw')) {
                obj['availableToWithdraw'] = ApiClient.convertToType(data['availableToWithdraw'], 'number');
            }
            if (data.hasOwnProperty('isOwner')) {
                obj['isOwner'] = ApiClient.convertToType(data['isOwner'], 'boolean');
            }
            if (data.hasOwnProperty('withheldInvestment')) {
                obj['withheldInvestment'] = ApiClient.convertToType(data['withheldInvestment'], 'number');
            }
        }
        return obj;
    }
}
