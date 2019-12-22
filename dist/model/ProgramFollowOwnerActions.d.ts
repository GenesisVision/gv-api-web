export declare class ProgramFollowOwnerActions {
    'canClose': boolean;
    'canClosePeriod': boolean;
    'canChangePassword': boolean;
    'canTransferMoney': boolean;
    'canMakeProgramFromPrivateTradingAccount': boolean;
    'canMakeSignalProviderFromPrivateTradingAccount': boolean;
    'canMakeSignalProviderFromPrivateExternalTradingAccount': boolean;
    'canMakeProgramFromSignalProvider': boolean;
    'canMakeSignalProviderFromProgram': boolean;
    'canEditSignalProviderSettings': boolean;
    'isEnoughMoneyToCreateProgram': boolean;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramFollowOwnerActions | undefined;
}
