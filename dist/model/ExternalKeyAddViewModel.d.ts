export declare class ExternalKeyAddViewModel {
    'title': string;
    'exchangeId': string;
    'key': string;
    'secret': string;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ExternalKeyAddViewModel;
}
