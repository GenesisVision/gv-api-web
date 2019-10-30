import { ExternalKeyViewModel } from './ExternalKeyViewModel';
export declare class ExternalKeysViewModel {
    'keys'?: Array<ExternalKeyViewModel>;
    'total'?: number;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ExternalKeysViewModel): ExternalKeysViewModel;
}
