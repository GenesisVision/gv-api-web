import ApiClient from "../ApiClient";
export class DashboardTradingAssetActions {
    constructor(data) {
        this['canAddRequestInvest'] = data['canAddRequestInvest'];
        this['canAddRequestWithdraw'] = data['canAddRequestWithdraw'];
        this['canTransferMoney'] = data['canTransferMoney'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DashboardTradingAssetActions({
                'canAddRequestInvest': ApiClient.convertToType(data['canAddRequestInvest'], 'boolean'),
                'canAddRequestWithdraw': ApiClient.convertToType(data['canAddRequestWithdraw'], 'boolean'),
                'canTransferMoney': ApiClient.convertToType(data['canTransferMoney'], 'boolean'),
            });
        }
    }
}
