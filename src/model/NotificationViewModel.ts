import { AssetDetails } from './AssetDetails';
import { BasePlatformAsset } from './BasePlatformAsset';
import { NotificationLocationViewModel } from './NotificationLocationViewModel';
import { ProfilePublic } from './ProfilePublic';

export interface NotificationViewModel {
    id: string;
    text: string;
    type: string;
    date: Date;
    imageUrl: string;
    isUnread: boolean;
    location: NotificationLocationViewModel;
    assetDetails: AssetDetails;
    userDetails: ProfilePublic;
    platformAssetDetails: BasePlatformAsset;
}

