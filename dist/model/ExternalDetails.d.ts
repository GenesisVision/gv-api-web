export declare class ExternalDetails {
    'id': string;
    'logo': string;
    'hash': string;
    'addressUrl': string;
    'title': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ExternalDetails | undefined;
}
