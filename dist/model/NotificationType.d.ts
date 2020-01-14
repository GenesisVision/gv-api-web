import { GenericFabric } from "../constructFromObject";
export declare type NotificationType = 'PlatformNewsAndUpdates' | 'PlatformEmergency' | 'PlatformOther' | 'ProfileUpdated' | 'ProfilePwdUpdated' | 'ProfileVerification' | 'Profile2FA' | 'ProfileSecurity' | 'TradingAccountPwdUpdated' | 'TradingAccountUpdated' | 'ProgramNewsAndUpdates' | 'ProgramEndOfPeriod' | 'ProgramCondition' | 'ProgramExceedInvestmentLimit' | 'FollowNewsAndUpdates' | 'FundNewsAndUpdates' | 'FundEndOfPeriod' | 'FundRebalancing' | 'ManagerNewProgram' | 'ManagerNewFund' | 'ManagerNewExternalSignalAccount' | 'ManagerNewSignalProvider' | 'Signals' | 'ExternalSignals';
export declare const NotificationType: {
    constructFromObject: GenericFabric<NotificationType>;
};
