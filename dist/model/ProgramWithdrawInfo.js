import ApiClient from "../ApiClient";
export class ProgramWithdrawInfo {
    constructor(data) {
        this['periodEnds'] = data['periodEnds'];
        this['title'] = data['title'];
        this['availableToWithdraw'] = data['availableToWithdraw'];
        this['isOwner'] = data['isOwner'];
        this['withheldInvestment'] = data['withheldInvestment'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramWithdrawInfo({
                'periodEnds': ApiClient.convertToType(data['periodEnds'], 'Date'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'availableToWithdraw': ApiClient.convertToType(data['availableToWithdraw'], 'number'),
                'isOwner': ApiClient.convertToType(data['isOwner'], 'boolean'),
                'withheldInvestment': ApiClient.convertToType(data['withheldInvestment'], 'number'),
            });
        }
    }
}
