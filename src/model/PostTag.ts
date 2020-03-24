import { AssetDetails } from './AssetDetails';
import { PlatformAsset } from './PlatformAsset';
import { Post } from './Post';
import { ProfilePublicShort } from './ProfilePublicShort';
import { SocialPostTagType } from './SocialPostTagType';

export interface PostTag {
    title: string;
    number: number;
    type: SocialPostTagType;
    assetDetails: AssetDetails;
    userDetails: ProfilePublicShort;
    platformAssetDetails: PlatformAsset;
    post: Post;
}

