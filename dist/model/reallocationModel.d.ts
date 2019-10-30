import { FundAssetPartWithIcon } from './fundAssetPartWithIcon';
export declare class ReallocationModel {
    'date'?: Date;
    'parts'?: [FundAssetPartWithIcon];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ReallocationModel): ReallocationModel;
}
