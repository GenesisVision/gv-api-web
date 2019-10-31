import ApiClient from "../ApiClient";
export class ProgramInvestInfoOld {
    constructor(data) {
        this['periodEnds'] = data['periodEnds'];
        this['availableToInvestBase'] = data['availableToInvestBase'];
        this['title'] = data['title'];
        this['programCurrencyMinInvestment'] = data['programCurrencyMinInvestment'];
        this['entryFee'] = data['entryFee'];
        this['gvCommission'] = data['gvCommission'];
        this['rate'] = data['rate'];
        this['isOwnProgram'] = data['isOwnProgram'];
    }
    static constructFromObject(data) {
        return new ProgramInvestInfoOld({
            'periodEnds': ApiClient.convertToType(data['periodEnds'], 'Date'),
            'availableToInvestBase': ApiClient.convertToType(data['availableToInvestBase'], 'number'),
            'title': ApiClient.convertToType(data['title'], 'string'),
            'programCurrencyMinInvestment': ApiClient.convertToType(data['programCurrencyMinInvestment'], 'number'),
            'entryFee': ApiClient.convertToType(data['entryFee'], 'number'),
            'gvCommission': ApiClient.convertToType(data['gvCommission'], 'number'),
            'rate': ApiClient.convertToType(data['rate'], 'number'),
            'isOwnProgram': ApiClient.convertToType(data['isOwnProgram'], 'boolean'),
        });
    }
}
