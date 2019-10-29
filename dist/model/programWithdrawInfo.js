import ApiClient from "../ApiClient";
export class ProgramWithdrawInfo {
    constructor() {
    }
    static constructFromObject(data, obj = new ProgramWithdrawInfo()) {
        if (data) {
            if (data.hasOwnProperty('periodEnds')) {
                obj['periodEnds'] = ApiClient.convertToType(data['periodEnds'], 'Date');
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
