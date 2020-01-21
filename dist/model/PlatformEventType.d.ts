import { GenericFabric } from "../constructFromObject";
export declare type PlatformEventType = 'NewTradingStrategy' | 'FundStarted' | 'ProgramStarted' | 'PeriodEnded' | 'FundReallocated' | 'FollowTrade' | 'Undefined';
export declare const PlatformEventType: {
    constructFromObject: GenericFabric<PlatformEventType>;
};
