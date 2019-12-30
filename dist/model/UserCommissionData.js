import ApiClient from "../ApiClient";
export class UserCommissionData {
    constructor(data) {
        this['isPayingCommissionInGvt'] = data['isPayingCommissionInGvt'];
        this['gvtHolderTradingFee'] = data['gvtHolderTradingFee'];
        this['gvtHolderDiscount'] = data['gvtHolderDiscount'];
        this['regularTradingFee'] = data['regularTradingFee'];
        this['regularDiscount'] = data['regularDiscount'];
    }
    static constructFromObject(data) {
        if (data) {
            return new UserCommissionData({
                'isPayingCommissionInGvt': ApiClient.convertToType(data['isPayingCommissionInGvt'], 'boolean'),
                'gvtHolderTradingFee': ApiClient.convertToType(data['gvtHolderTradingFee'], 'number'),
                'gvtHolderDiscount': ApiClient.convertToType(data['gvtHolderDiscount'], 'number'),
                'regularTradingFee': ApiClient.convertToType(data['regularTradingFee'], 'number'),
                'regularDiscount': ApiClient.convertToType(data['regularDiscount'], 'number'),
            });
        }
    }
}
