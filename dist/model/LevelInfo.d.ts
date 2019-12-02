export declare class LevelInfo {
    'level': number;
    'investmentLimit': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): LevelInfo | undefined;
}
