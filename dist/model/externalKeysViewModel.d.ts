import { ExternalKeyViewModel } from './externalKeyViewModel';
export declare class ExternalKeysViewModel {
    'keys'?: [ExternalKeyViewModel];
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ExternalKeysViewModel): ExternalKeysViewModel;
}
