export declare class PlatformNews {
    'date': Date;
    'title': string;
    'body': string;
    'logo': string;
    'url': string;
    'isHot': boolean;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PlatformNews | undefined;
}
