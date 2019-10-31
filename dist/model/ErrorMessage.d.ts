export declare class ErrorMessage {
    'message': string;
    'property': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ErrorMessage;
}
