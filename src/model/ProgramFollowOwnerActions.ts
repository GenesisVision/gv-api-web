
export interface ProgramFollowOwnerActions {
    canClose: boolean;
    canClosePeriod: boolean;
    canChangePassword: boolean;
    canTransferMoney: boolean;
    canMakeProgramFromPrivateTradingAccount: boolean;
    canMakeSignalProviderFromPrivateTradingAccount: boolean;
    canMakeSignalProviderFromPrivateExternalTradingAccount: boolean;
    canMakeProgramFromSignalProvider: boolean;
    canMakeSignalProviderFromProgram: boolean;
    canEditSignalProviderSettings: boolean;
    isEnoughMoneyToCreateProgram: boolean;
    canConfirm2FA: boolean;
    canCloseOpenPositions: boolean;
}

