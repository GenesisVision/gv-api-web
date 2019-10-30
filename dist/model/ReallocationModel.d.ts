import { FundAssetPartWithIcon } from './FundAssetPartWithIcon';
export declare class ReallocationModel {
    'date'?: Date;
    'parts'?: Array<FundAssetPartWithIcon>;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ReallocationModel): ReallocationModel;
}
