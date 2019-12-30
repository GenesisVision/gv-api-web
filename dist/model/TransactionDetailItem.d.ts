export declare class TransactionDetailItem {
    'details': string;
    'url': string;
    'canCopy': boolean;
    'title': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): TransactionDetailItem | undefined;
}
