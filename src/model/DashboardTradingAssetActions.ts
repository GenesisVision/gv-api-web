
export interface DashboardTradingAssetActions {
    canAddRequestInvest: boolean;
    canAddRequestWithdraw: boolean;
    canTransferMoney: boolean;
    canMakeDemoDeposit: boolean;
    canChangePassword: boolean;
    canClose: boolean;
    hasTerminal: boolean;
    canMakeProgramFromPrivateTradingAccount: boolean;
    canMakeSignalProviderFromPrivateTradingAccount: boolean;
    canMakeSignalProviderFromPrivateExternalTradingAccount: boolean;
    canMakeProgramFromSignalProvider: boolean;
    canMakeSignalProviderFromProgram: boolean;
    canEditSignalProviderSettings: boolean;
    isEnoughMoneyToCreateProgram: boolean;
    canConfirm2FA: boolean;
}

