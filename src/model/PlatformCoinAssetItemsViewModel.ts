import { PlatformCoinAsset } from './PlatformCoinAsset';

export interface PlatformCoinAssetItemsViewModel {
    readonly items: Array<PlatformCoinAsset>;
    readonly total: number;
}

