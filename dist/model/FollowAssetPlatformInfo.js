import { FollowCreateAssetPlatformInfo } from './FollowCreateAssetPlatformInfo';
export class FollowAssetPlatformInfo {
    constructor(data) {
        this['createFollowInfo'] = data['createFollowInfo'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FollowAssetPlatformInfo({
                'createFollowInfo': FollowCreateAssetPlatformInfo.constructFromObject(data['createFollowInfo']),
            });
        }
    }
}
