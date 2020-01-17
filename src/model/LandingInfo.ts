import { ItemsViewModelFollowDetailsListItem } from './ItemsViewModelFollowDetailsListItem';
import { ItemsViewModelFundDetailsListItem } from './ItemsViewModelFundDetailsListItem';
import { ItemsViewModelProgramDetailsListItem } from './ItemsViewModelProgramDetailsListItem';
import { PlatformEvent } from './PlatformEvent';
import { PlatformNews } from './PlatformNews';

export interface LandingInfo {
    events: Array<PlatformEvent>;
    news: Array<PlatformNews>;
    follows: ItemsViewModelFollowDetailsListItem;
    programs: ItemsViewModelProgramDetailsListItem;
    funds: ItemsViewModelFundDetailsListItem;
}

