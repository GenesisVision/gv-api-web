export declare class ErrorMessage {
    'message'?: string;
    'property'?: string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ErrorMessage): ErrorMessage;
}
