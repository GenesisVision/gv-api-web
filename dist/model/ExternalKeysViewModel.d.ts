import { ExternalKeyViewModel } from './ExternalKeyViewModel';
export declare class ExternalKeysViewModel {
    'keys': Array<ExternalKeyViewModel>;
    'total': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ExternalKeysViewModel | undefined;
}
