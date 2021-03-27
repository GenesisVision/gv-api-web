import { AssetDetails } from './AssetDetails';
import { BasePlatformAsset } from './BasePlatformAsset';
import { NotificationLocationViewModel } from './NotificationLocationViewModel';
import { ProfilePublic } from './ProfilePublic';
import { PushNotificationChannel } from './PushNotificationChannel';

export interface PushNotificationViewModel {
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
    channel: PushNotificationChannel;
}

