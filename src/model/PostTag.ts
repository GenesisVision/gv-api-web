import { AssetDetails } from './AssetDetails';
import { PlatformAsset } from './PlatformAsset';
import { Post } from './Post';
import { ProfilePublic } from './ProfilePublic';
import { SocialPostTagType } from './SocialPostTagType';

export interface PostTag {
    title: string;
    number: number;
    type: SocialPostTagType;
    assetDetails: AssetDetails;
    userDetails: ProfilePublic;
    platformAssetDetails: PlatformAsset;
    post: Post;
}

