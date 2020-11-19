import { ExchangeAsset } from './ExchangeAsset';

export interface ExchangeAssetItemsViewModel {
    readonly items: Array<ExchangeAsset>;
    readonly total: number;
}

