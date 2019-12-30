export declare class PrivateTradingAccountOwnerActions {
    'canClose': boolean;
    'canChangePassword': boolean;
    'canTransferMoney': boolean;
    'canMakeProgramFromPrivateTradingAccount': boolean;
    'canMakeSignalProviderFromPrivateTradingAccount': boolean;
    'canMakeSignalProviderFromPrivateExternalTradingAccount': boolean;
    'canMakeProgramFromSignalProvider': boolean;
    'canMakeSignalProviderFromProgram': boolean;
    'canEditSignalProviderSettings': boolean;
    'isEnoughMoneyToCreateProgram': boolean;
    'canConfirm2FA': boolean;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PrivateTradingAccountOwnerActions | undefined;
}
