import ApiClient from "../ApiClient";
export class ProgramWithdrawInfoOld {
    constructor(data) {
        this['periodEnds'] = data['periodEnds'];
        this['title'] = data['title'];
        this['availableToWithdraw'] = data['availableToWithdraw'];
        this['rate'] = data['rate'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramWithdrawInfoOld({
                'periodEnds': ApiClient.convertToType(data['periodEnds'], 'Date'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'availableToWithdraw': ApiClient.convertToType(data['availableToWithdraw'], 'number'),
                'rate': ApiClient.convertToType(data['rate'], 'number'),
            });
        }
    }
}
