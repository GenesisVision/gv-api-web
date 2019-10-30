import { ExternalKeyViewModel } from './externalKeyViewModel';
export declare class ExternalKeysViewModel {
    'keys'?: Array<ExternalKeyViewModel>;
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ExternalKeysViewModel): ExternalKeysViewModel;
}
