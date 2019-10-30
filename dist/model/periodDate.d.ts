export declare class PeriodDate {
    'dateFrom'?: Date;
    'dateTo'?: Date;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: PeriodDate): PeriodDate;
}
