import { ItemsViewModelFollowDetailsListItem } from './ItemsViewModelFollowDetailsListItem';
import { ItemsViewModelFundDetailsListItem } from './ItemsViewModelFundDetailsListItem';
import { ItemsViewModelProgramDetailsListItem } from './ItemsViewModelProgramDetailsListItem';
import { PlatformEvent } from './PlatformEvent';
import { PlatformNews } from './PlatformNews';
export declare class LandingInfo {
    'events': Array<PlatformEvent>;
    'news': Array<PlatformNews>;
    'follows': ItemsViewModelFollowDetailsListItem;
    'programs': ItemsViewModelProgramDetailsListItem;
    'funds': ItemsViewModelFundDetailsListItem;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): LandingInfo | undefined;
}
