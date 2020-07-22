import { AssetGlobalType } from './AssetGlobalType';
import { NotificationType } from './NotificationType';

export interface NotificationViewModel {
    id: string;
    text: string;
    date: Date;
    type: NotificationType;
    assetId: string;
    managerId: string;
    logoUrl: string;
    url: string;
    color: string;
    isUnread: boolean;
    assetType: AssetGlobalType;
}

