import { GenericFabric } from "../constructFromObject";
export declare type PlatformEventType = 'Undefined' | 'ProgramStarted' | 'FundStarted' | 'NewTradingStrategy' | 'PeriodEnded' | 'FundReallocated' | 'FollowTrade';
export declare const PlatformEventType: {
    constructFromObject: GenericFabric<PlatformEventType>;
};
