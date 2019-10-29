import { AssetType } from './assetType';
import { ProfitChart } from './profitChart';
export declare class RecommendedAsset {
    'chart'?: ProfitChart;
    'id'?: string;
    'logo'?: string;
    'color'?: string;
    'title'?: string;
    'url'?: string;
    'assetType'?: AssetType;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: RecommendedAsset): RecommendedAsset;
}
