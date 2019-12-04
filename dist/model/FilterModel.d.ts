export declare class FilterModel {
    'key': string;
    'title': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FilterModel | undefined;
}
