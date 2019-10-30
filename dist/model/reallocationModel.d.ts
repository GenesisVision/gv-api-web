import { FundAssetPartWithIcon } from './fundAssetPartWithIcon';
export declare class ReallocationModel {
    'date'?: Date;
    'parts'?: Array<FundAssetPartWithIcon>;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ReallocationModel): ReallocationModel;
}
