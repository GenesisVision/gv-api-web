import ApiClient from "../ApiClient";
export class ProgramUpdate {
    constructor(data) {
        this['title'] = data['title'];
        this['description'] = data['description'];
        this['logo'] = data['logo'];
        this['entryFee'] = data['entryFee'];
        this['exitFee'] = data['exitFee'];
        this['successFee'] = data['successFee'];
        this['stopOutLevel'] = data['stopOutLevel'];
        this['investmentLimit'] = data['investmentLimit'];
        this['tradesDelay'] = data['tradesDelay'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramUpdate({
                'title': ApiClient.convertToType(data['title'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'entryFee': ApiClient.convertToType(data['entryFee'], 'number'),
                'exitFee': ApiClient.convertToType(data['exitFee'], 'number'),
                'successFee': ApiClient.convertToType(data['successFee'], 'number'),
                'stopOutLevel': ApiClient.convertToType(data['stopOutLevel'], 'number'),
                'investmentLimit': ApiClient.convertToType(data['investmentLimit'], 'number'),
                'tradesDelay': ApiClient.convertToType(data['tradesDelay'], 'string'),
            });
        }
    }
}
