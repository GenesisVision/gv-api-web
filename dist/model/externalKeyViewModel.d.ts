export declare class ExternalKeyViewModel {
    'id'?: string;
    'title'?: string;
    'dateAdd'?: Date;
    'exchangeName'?: string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ExternalKeyViewModel): ExternalKeyViewModel;
}
