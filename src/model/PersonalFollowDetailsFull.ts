import { AssetGuestActions } from './AssetGuestActions';

export interface PersonalFollowDetailsFull {
    isFavorite: boolean;
    guestActions: AssetGuestActions;
    hasNotifications: boolean;
    subscribedAccounts: number;
    successFeePersonal: number;
    volumeFeePersonal: number;
}

