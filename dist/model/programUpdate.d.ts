export declare class ProgramUpdate {
    'title'?: string;
    'description'?: string;
    'logo'?: string;
    'entryFee'?: number;
    'exitFee'?: number;
    'successFee'?: number;
    'stopOutLevel'?: number;
    'investmentLimit'?: number;
    'tradesDelay'?: ProgramUpdate.TradesDelayEnum;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProgramUpdate): ProgramUpdate;
}
export declare namespace ProgramUpdate {
    type TradesDelayEnum = 'None' | 'FiveMinutes' | 'FifteenMinutes' | 'ThirtyMinutes' | 'OneHour' | 'SixHours';
}
