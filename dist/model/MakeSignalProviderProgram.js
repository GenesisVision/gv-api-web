import ApiClient from "../ApiClient";
export class MakeSignalProviderProgram {
    constructor(data) {
        this['id'] = data['id'];
        this['periodLength'] = data['periodLength'];
        this['stopOutLevel'] = data['stopOutLevel'];
        this['investmentLimit'] = data['investmentLimit'];
        this['entryFee'] = data['entryFee'];
        this['successFee'] = data['successFee'];
    }
    static constructFromObject(data) {
        if (data) {
            return new MakeSignalProviderProgram({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'periodLength': ApiClient.convertToType(data['periodLength'], 'number'),
                'stopOutLevel': ApiClient.convertToType(data['stopOutLevel'], 'number'),
                'investmentLimit': ApiClient.convertToType(data['investmentLimit'], 'number'),
                'entryFee': ApiClient.convertToType(data['entryFee'], 'number'),
                'successFee': ApiClient.convertToType(data['successFee'], 'number'),
            });
        }
    }
}
