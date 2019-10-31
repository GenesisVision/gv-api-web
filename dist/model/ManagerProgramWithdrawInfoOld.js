import ApiClient from "../ApiClient";
export class ManagerProgramWithdrawInfoOld {
    constructor(data) {
        this['withheldInvestment'] = data['withheldInvestment'];
        this['periodEnds'] = data['periodEnds'];
        this['title'] = data['title'];
        this['availableToWithdraw'] = data['availableToWithdraw'];
        this['rate'] = data['rate'];
    }
    static constructFromObject(data) {
        return new ManagerProgramWithdrawInfoOld({
            'withheldInvestment': ApiClient.convertToType(data['withheldInvestment'], 'number'),
            'periodEnds': ApiClient.convertToType(data['periodEnds'], 'Date'),
            'title': ApiClient.convertToType(data['title'], 'string'),
            'availableToWithdraw': ApiClient.convertToType(data['availableToWithdraw'], 'number'),
            'rate': ApiClient.convertToType(data['rate'], 'number'),
        });
    }
}
