import { GenericFabric } from "../constructFromObject";
export declare type TradesDelay = 'None' | 'FiveMinutes' | 'FifteenMinutes' | 'ThirtyMinutes' | 'OneHour' | 'SixHours';
export declare const TradesDelay: {
    constructFromObject: GenericFabric<import("./programUpdate").ProgramUpdate.TradesDelayEnum>;
};
