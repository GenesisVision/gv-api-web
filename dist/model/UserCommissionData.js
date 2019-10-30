import ApiClient from "../ApiClient";
export class UserCommissionData {
    static constructFromObject(data, obj = new UserCommissionData()) {
        if (data) {
            if (data.hasOwnProperty('isPayingCommissionInGvt')) {
                obj['isPayingCommissionInGvt'] = ApiClient.convertToType(data['isPayingCommissionInGvt'], 'boolean');
            }
            if (data.hasOwnProperty('gvtHolderTradingFee')) {
                obj['gvtHolderTradingFee'] = ApiClient.convertToType(data['gvtHolderTradingFee'], 'number');
            }
            if (data.hasOwnProperty('gvtHolderDiscount')) {
                obj['gvtHolderDiscount'] = ApiClient.convertToType(data['gvtHolderDiscount'], 'number');
            }
            if (data.hasOwnProperty('regularTradingFee')) {
                obj['regularTradingFee'] = ApiClient.convertToType(data['regularTradingFee'], 'number');
            }
            if (data.hasOwnProperty('regularDiscount')) {
                obj['regularDiscount'] = ApiClient.convertToType(data['regularDiscount'], 'number');
            }
        }
        return obj;
    }
}
