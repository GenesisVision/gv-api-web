export declare class TransactionDetail {
    'title': string;
    'details': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): TransactionDetail | undefined;
}
