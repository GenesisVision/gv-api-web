
export interface DashboardTradingAssetActions {
    canMakeProgramFromPrivateTradingAccount: boolean;
    canMakeExchangeProgramFromPrivateTradingAccount: boolean;
    canMakeSignalProviderFromPrivateTradingAccount: boolean;
    canMakeSignalProviderFromPrivateExternalTradingAccount: boolean;
    canMakeProgramFromSignalProvider: boolean;
    canMakeSignalProviderFromProgram: boolean;
    canEditSignalProviderSettings: boolean;
    isEnoughMoneyToCreateProgram: boolean;
    canConfirm2FA: boolean;
    canAddRequestInvest: boolean;
    canAddRequestWithdraw: boolean;
    canTransferMoney: boolean;
    canMakeDemoDeposit: boolean;
    canChangePassword: boolean;
    canClose: boolean;
    canClosePeriod: boolean;
    hasTerminal: boolean;
}

