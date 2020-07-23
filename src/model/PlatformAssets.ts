import { PlatformAsset } from './PlatformAsset';
import { ProviderPlatformAssets } from './ProviderPlatformAssets';

export interface PlatformAssets {
    assets: Array<PlatformAsset>;
    providers: Array<ProviderPlatformAssets>;
}

