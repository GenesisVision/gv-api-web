import { AssetType } from './assetType';
export declare class AssetDetails {
    'id'?: string;
    'logo'?: string;
    'color'?: string;
    'title'?: string;
    'url'?: string;
    'assetType'?: AssetType;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: AssetDetails): AssetDetails;
}
