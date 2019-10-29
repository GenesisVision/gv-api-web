export declare class ExternalKeyAddViewModel {
    'title': string;
    'exchangeId': string;
    'key': string;
    'secret'?: string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ExternalKeyAddViewModel): ExternalKeyAddViewModel;
}
