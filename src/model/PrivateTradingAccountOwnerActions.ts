export interface PrivateTradingAccountOwnerActions {
    canClose: boolean;
    canChangePassword: boolean;
    canTransferMoney: boolean;
    canMakeDemoDeposit: boolean;
    canMakeProgramFromPrivateTradingAccount: boolean;
    canMakeSignalProviderFromPrivateTradingAccount: boolean;
    canMakeSignalProviderFromPrivateExternalTradingAccount: boolean;
    canMakeProgramFromSignalProvider: boolean;
    canMakeSignalProviderFromProgram: boolean;
    canEditSignalProviderSettings: boolean;
    isEnoughMoneyToCreateProgram: boolean;
    canConfirm2FA: boolean;
}

