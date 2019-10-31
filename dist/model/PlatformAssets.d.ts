import { PlatformAsset } from './PlatformAsset';
export declare class PlatformAssets {
    'assets': Array<PlatformAsset>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PlatformAssets | undefined;
}
