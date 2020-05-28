import { PlatformAsset } from './PlatformAsset';
import { Post } from './Post';
import { PostAssetDetailsWithPrices } from './PostAssetDetailsWithPrices';
import { PostEvent } from './PostEvent';
import { ProfilePublic } from './ProfilePublic';
import { SocialPostTagType } from './SocialPostTagType';

export interface PostTag {
    title: string;
    number: number;
    type: SocialPostTagType;
    assetDetails: PostAssetDetailsWithPrices;
    userDetails: ProfilePublic;
    platformAssetDetails: PlatformAsset;
    post: Post;
    event: PostEvent;
}

