import { AssetSignalSettings } from './AssetSignalSettings';
import { PersonalFollowDetailsFull } from './PersonalFollowDetailsFull';
export declare class FollowDetailsFull {
    'tradesCount': number;
    'signalSettings': AssetSignalSettings;
    'subscribersCount': number;
    'personalDetails': PersonalFollowDetailsFull;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FollowDetailsFull | undefined;
}
