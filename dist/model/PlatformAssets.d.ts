import { PlatformAsset } from './PlatformAsset';
export declare class PlatformAssets {
    'assets'?: Array<PlatformAsset>;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: PlatformAssets): PlatformAssets;
}
