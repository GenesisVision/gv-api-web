import { ItemsViewModelFollowDetailsListItem } from './ItemsViewModelFollowDetailsListItem';
import { ItemsViewModelFundDetailsListItem } from './ItemsViewModelFundDetailsListItem';
import { ItemsViewModelProgramDetailsListItem } from './ItemsViewModelProgramDetailsListItem';
import { PlatformEvent } from './PlatformEvent';
export declare class LandingInfo {
    'events': Array<PlatformEvent>;
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
