export declare class ExternalKeyViewModel {
    'id': string;
    'title': string;
    'dateAdd': Date;
    'exchangeName': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ExternalKeyViewModel | undefined;
}
