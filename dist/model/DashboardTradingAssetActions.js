import ApiClient from "../ApiClient";
export class DashboardTradingAssetActions {
    constructor(data) {
        this['canAddRequestInvest'] = data['canAddRequestInvest'];
        this['canAddRequestWithdraw'] = data['canAddRequestWithdraw'];
        this['canTransferMoney'] = data['canTransferMoney'];
        this['canChangePassword'] = data['canChangePassword'];
        this['canClose'] = data['canClose'];
        this['canMakeProgramFromPrivateTradingAccount'] = data['canMakeProgramFromPrivateTradingAccount'];
        this['canMakeSignalProviderFromPrivateTradingAccount'] = data['canMakeSignalProviderFromPrivateTradingAccount'];
        this['canMakeSignalProviderFromPrivateExternalTradingAccount'] = data['canMakeSignalProviderFromPrivateExternalTradingAccount'];
        this['canMakeProgramFromSignalProvider'] = data['canMakeProgramFromSignalProvider'];
        this['canMakeSignalProviderFromProgram'] = data['canMakeSignalProviderFromProgram'];
        this['canEditSignalProviderSettings'] = data['canEditSignalProviderSettings'];
        this['isEnoughMoneyToCreateProgram'] = data['isEnoughMoneyToCreateProgram'];
        this['canConfirm2FA'] = data['canConfirm2FA'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DashboardTradingAssetActions({
                'canAddRequestInvest': ApiClient.convertToType(data['canAddRequestInvest'], 'boolean'),
                'canAddRequestWithdraw': ApiClient.convertToType(data['canAddRequestWithdraw'], 'boolean'),
                'canTransferMoney': ApiClient.convertToType(data['canTransferMoney'], 'boolean'),
                'canChangePassword': ApiClient.convertToType(data['canChangePassword'], 'boolean'),
                'canClose': ApiClient.convertToType(data['canClose'], 'boolean'),
                'canMakeProgramFromPrivateTradingAccount': ApiClient.convertToType(data['canMakeProgramFromPrivateTradingAccount'], 'boolean'),
                'canMakeSignalProviderFromPrivateTradingAccount': ApiClient.convertToType(data['canMakeSignalProviderFromPrivateTradingAccount'], 'boolean'),
                'canMakeSignalProviderFromPrivateExternalTradingAccount': ApiClient.convertToType(data['canMakeSignalProviderFromPrivateExternalTradingAccount'], 'boolean'),
                'canMakeProgramFromSignalProvider': ApiClient.convertToType(data['canMakeProgramFromSignalProvider'], 'boolean'),
                'canMakeSignalProviderFromProgram': ApiClient.convertToType(data['canMakeSignalProviderFromProgram'], 'boolean'),
                'canEditSignalProviderSettings': ApiClient.convertToType(data['canEditSignalProviderSettings'], 'boolean'),
                'isEnoughMoneyToCreateProgram': ApiClient.convertToType(data['isEnoughMoneyToCreateProgram'], 'boolean'),
                'canConfirm2FA': ApiClient.convertToType(data['canConfirm2FA'], 'boolean'),
            });
        }
    }
}
