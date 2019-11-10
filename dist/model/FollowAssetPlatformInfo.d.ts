import { FollowCreateAssetPlatformInfo } from './FollowCreateAssetPlatformInfo';
export declare class FollowAssetPlatformInfo {
    'createFollowInfo': FollowCreateAssetPlatformInfo;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FollowAssetPlatformInfo | undefined;
}
