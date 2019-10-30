export declare class ProgramUpdate {
    'title'?: string;
    'description'?: string;
    'logo'?: string;
    'entryFee'?: number;
    'exitFee'?: number;
    'successFee'?: number;
    'stopOutLevel'?: number;
    'investmentLimit'?: number;
    'tradesDelay'?: TradesDelayEnum;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramUpdate): ProgramUpdate;
}
declare type TradesDelayEnum = 'None' | 'FiveMinutes' | 'FifteenMinutes' | 'ThirtyMinutes' | 'OneHour' | 'SixHours';
export {};
