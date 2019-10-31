export declare class ExternalDetails {
    'id': string;
    'logo': string;
    'title': string;
    'address': string;
    'url': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ExternalDetails | undefined;
}
