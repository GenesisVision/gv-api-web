
export interface ProgramFollowOwnerActions {
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
    canClosePeriod: boolean;
    canChangePassword: boolean;
    canTransferMoney: boolean;
    canCloseOpenPositions: boolean;
}

