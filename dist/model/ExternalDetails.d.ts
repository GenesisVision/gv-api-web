export declare class ExternalDetails {
    'title': string;
    'id': string;
    'logo': string;
    'hash': string;
    'addressUrl': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ExternalDetails | undefined;
}
