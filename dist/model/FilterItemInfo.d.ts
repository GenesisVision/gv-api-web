export declare class FilterItemInfo {
    'key': string;
    'title': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FilterItemInfo | undefined;
}
