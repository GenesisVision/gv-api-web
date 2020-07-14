import { AssetSignalSettings } from './AssetSignalSettings';
import { PersonalFollowDetailsFull } from './PersonalFollowDetailsFull';

export interface FollowDetailsFull {
    tradesCount: number;
    signalSettings: AssetSignalSettings;
    subscribersCount: number;
    personalDetails: PersonalFollowDetailsFull;
}

