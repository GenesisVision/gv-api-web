export declare class SimpleChartPoint {
    'date': Date;
    'value': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): SimpleChartPoint | undefined;
}
