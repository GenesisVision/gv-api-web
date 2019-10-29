import { PlatformAsset } from './platformAsset';
export declare class PlatformAssets {
    'assets'?: [PlatformAsset];
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: PlatformAssets): PlatformAssets;
}
