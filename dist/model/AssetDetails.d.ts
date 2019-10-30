import { AssetType } from './AssetType';
export declare class AssetDetails {
    'id'?: string;
    'logo'?: string;
    'color'?: string;
    'title'?: string;
    'url'?: string;
    'assetType'?: AssetType;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: AssetDetails): AssetDetails;
}
