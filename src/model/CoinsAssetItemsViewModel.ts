import { CoinsAsset } from './CoinsAsset';

export interface CoinsAssetItemsViewModel {
    readonly items: Array<CoinsAsset>;
    readonly total: number;
}

