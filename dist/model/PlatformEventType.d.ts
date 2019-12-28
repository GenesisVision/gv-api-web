import { GenericFabric } from "../constructFromObject";
export declare type PlatformEventType = 'NewTradingStrategy' | 'ProgramStarted' | 'FundStarted' | 'PeriodEnded' | 'FundReallocated' | 'FollowTrade' | 'Undefined';
export declare const PlatformEventType: {
    constructFromObject: GenericFabric<PlatformEventType>;
};
