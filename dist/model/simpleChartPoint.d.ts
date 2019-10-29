export declare class SimpleChartPoint {
    'date'?: Date;
    'value'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: SimpleChartPoint): SimpleChartPoint;
}
