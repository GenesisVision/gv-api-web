export declare class ErrorMessage {
    'message'?: string;
    'property'?: string;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ErrorMessage): ErrorMessage;
}
