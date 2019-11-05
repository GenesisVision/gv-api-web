import ApiClient from "../ApiClient";
export class TradingAccountOwnerActions {
    constructor(data) {
        this['canClose'] = data['canClose'];
        this['canClosePeriod'] = data['canClosePeriod'];
        this['canChangePassword'] = data['canChangePassword'];
        this['canMakeProgramFromPrivateTradingAccount'] = data['canMakeProgramFromPrivateTradingAccount'];
        this['canMakePublicAccountFromPrivateTradingAccount'] = data['canMakePublicAccountFromPrivateTradingAccount'];
        this['canMakeProgramFromPublicTradingAccount'] = data['canMakeProgramFromPublicTradingAccount'];
        this['canMakeSignalProviderFromProgram'] = data['canMakeSignalProviderFromProgram'];
        this['canEditSignalProviderSettings'] = data['canEditSignalProviderSettings'];
    }
    static constructFromObject(data) {
        if (data) {
            return new TradingAccountOwnerActions({
                'canClose': ApiClient.convertToType(data['canClose'], 'boolean'),
                'canClosePeriod': ApiClient.convertToType(data['canClosePeriod'], 'boolean'),
                'canChangePassword': ApiClient.convertToType(data['canChangePassword'], 'boolean'),
                'canMakeProgramFromPrivateTradingAccount': ApiClient.convertToType(data['canMakeProgramFromPrivateTradingAccount'], 'boolean'),
                'canMakePublicAccountFromPrivateTradingAccount': ApiClient.convertToType(data['canMakePublicAccountFromPrivateTradingAccount'], 'boolean'),
                'canMakeProgramFromPublicTradingAccount': ApiClient.convertToType(data['canMakeProgramFromPublicTradingAccount'], 'boolean'),
                'canMakeSignalProviderFromProgram': ApiClient.convertToType(data['canMakeSignalProviderFromProgram'], 'boolean'),
                'canEditSignalProviderSettings': ApiClient.convertToType(data['canEditSignalProviderSettings'], 'boolean'),
            });
        }
    }
}
