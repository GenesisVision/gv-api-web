import { FundAssetPartWithIcon } from './FundAssetPartWithIcon';
export declare class ReallocationModel {
    'date': Date;
    'parts': Array<FundAssetPartWithIcon>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ReallocationModel;
}
