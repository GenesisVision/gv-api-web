export declare class TransactionDetailsActions {
    'canResend': boolean;
    'canCancel': boolean;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): TransactionDetailsActions | undefined;
}
