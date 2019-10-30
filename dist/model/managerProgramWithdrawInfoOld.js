import ApiClient from "../ApiClient";
export class ManagerProgramWithdrawInfoOld {
    constructor() {
    }
    static constructFromObject(data, obj = new ManagerProgramWithdrawInfoOld()) {
        if (data) {
            if (data.hasOwnProperty('withheldInvestment')) {
                obj['withheldInvestment'] = ApiClient.convertToType(data['withheldInvestment'], 'number');
            }
            if (data.hasOwnProperty('periodEnds')) {
                obj['periodEnds'] = ApiClient.convertToType(data['periodEnds'], 'Date');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('availableToWithdraw')) {
                obj['availableToWithdraw'] = ApiClient.convertToType(data['availableToWithdraw'], 'number');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'number');
            }
        }
        return obj;
    }
}
