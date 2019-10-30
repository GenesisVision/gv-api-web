import ApiClient from "../ApiClient";
export class FundInvestInfo {
    constructor() {
    }
    static constructFromObject(data, obj = new FundInvestInfo()) {
        if (data) {
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('programCurrencyMinInvestment')) {
                obj['programCurrencyMinInvestment'] = ApiClient.convertToType(data['programCurrencyMinInvestment'], 'number');
            }
            if (data.hasOwnProperty('entryFee')) {
                obj['entryFee'] = ApiClient.convertToType(data['entryFee'], 'number');
            }
            if (data.hasOwnProperty('gvCommission')) {
                obj['gvCommission'] = ApiClient.convertToType(data['gvCommission'], 'number');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'number');
            }
            if (data.hasOwnProperty('isOwnProgram')) {
                obj['isOwnProgram'] = ApiClient.convertToType(data['isOwnProgram'], 'boolean');
            }
        }
        return obj;
    }
}
