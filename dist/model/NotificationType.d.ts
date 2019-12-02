import { GenericFabric } from "../constructFromObject";
export declare type NotificationType = 'PlatformNewsAndUpdates' | 'PlatformEmergency' | 'PlatformOther' | 'ProfileUpdated' | 'ProfilePwdUpdated' | 'ProfileVerification' | 'Profile2FA' | 'ProfileSecurity' | 'TradingAccountPwdUpdated' | 'ProgramNewsAndUpdates' | 'ProgramEndOfPeriod' | 'ProgramCondition' | 'ProgramExceedInvestmentLimit' | 'FundNewsAndUpdates' | 'FundEndOfPeriod' | 'FundRebalancing' | 'ManagerNewProgram' | 'ManagerNewFund' | 'ManagerNewExternalSignalAccount' | 'ManagerNewSignalProvider' | 'Signals' | 'ExternalSignals';
export declare const NotificationType: {
    constructFromObject: GenericFabric<NotificationType>;
};
