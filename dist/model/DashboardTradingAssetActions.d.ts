export declare class DashboardTradingAssetActions {
    'canAddRequestInvest': boolean;
    'canAddRequestWithdraw': boolean;
    'canTransferMoney': boolean;
    'canMakeDemoDeposit': boolean;
    'canChangePassword': boolean;
    'canClose': boolean;
    'hasTerminal': boolean;
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
    }): DashboardTradingAssetActions | undefined;
}
