export declare class TradingAccountOwnerActions {
    'canClose': boolean;
    'canClosePeriod': boolean;
    'canChangePassword': boolean;
    'canMakeProgramFromPrivateTradingAccount': boolean;
    'canMakeSignalProviderFromPrivateTradingAccount': boolean;
    'canMakeSignalProviderFromPrivateExternalTradingAccount': boolean;
    'canMakeProgramFromSignalProvider': boolean;
    'canMakeSignalProviderFromProgram': boolean;
    'canEditSignalProviderSettings': boolean;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): TradingAccountOwnerActions | undefined;
}
