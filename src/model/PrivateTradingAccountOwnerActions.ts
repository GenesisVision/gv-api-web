
export interface PrivateTradingAccountOwnerActions {
    canMakeProgramFromPrivateTradingAccount: boolean;
    canMakeExchangeProgramFromPrivateTradingAccount: boolean;
    canMakeSignalProviderFromPrivateTradingAccount: boolean;
    canMakeSignalProviderFromPrivateExternalTradingAccount: boolean;
    canMakeProgramFromSignalProvider: boolean;
    canMakeSignalProviderFromProgram: boolean;
    canEditSignalProviderSettings: boolean;
    isEnoughMoneyToCreateProgram: boolean;
    canConfirm2FA: boolean;
    canCreateApiKeys: boolean;
    canClose: boolean;
    canChangePassword: boolean;
    canTransferMoney: boolean;
    canMakeDemoDeposit: boolean;
    canCloseOpenPositions: boolean;
}

