import { Post } from './Post';
import { PostAssetDetailsWithPrices } from './PostAssetDetailsWithPrices';
import { PostEvent } from './PostEvent';
import { PostPlatformAssetDetailsWithPrices } from './PostPlatformAssetDetailsWithPrices';
import { ProfilePublic } from './ProfilePublic';
import { SocialPostTagType } from './SocialPostTagType';

export interface PostTag {
    title: string;
    number: number;
    type: SocialPostTagType;
    assetDetails: PostAssetDetailsWithPrices;
    userDetails: ProfilePublic;
    platformAssetDetails: PostPlatformAssetDetailsWithPrices;
    post: Post;
    event: PostEvent;
}

