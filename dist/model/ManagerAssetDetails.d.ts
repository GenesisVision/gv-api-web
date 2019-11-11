import { AssetType } from './AssetType';
import { ProgramAssetDetails } from './ProgramAssetDetails';
export declare class ManagerAssetDetails {
    'description': string;
    'manager': string;
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
    }): ManagerAssetDetails | undefined;
}
