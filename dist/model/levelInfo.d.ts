export declare class LevelInfo {
    'level'?: number;
    'investmentLimit'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: LevelInfo): LevelInfo;
}
