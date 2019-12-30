import { AssetType } from './AssetType';
import { ProgramAssetDetails } from './ProgramAssetDetails';
export declare class AssetRequestDetails {
    'entryFee': number;
    'exitFee': number;
    'withdrawPercent': number;
    'isWithdrawAll': boolean;
    'successFee': number;
    'id': string;
    'logo': string;
    'color': string;
    'title': string;
    'url': string;
    'assetType': AssetType;
    'programDetails': ProgramAssetDetails;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AssetRequestDetails | undefined;
}
