import { FollowDetailsListItemItemsViewModel } from './FollowDetailsListItemItemsViewModel';
import { FundDetailsListItemItemsViewModel } from './FundDetailsListItemItemsViewModel';
import { PlatformEvent } from './PlatformEvent';
import { PlatformNews } from './PlatformNews';
import { ProgramDetailsListItemItemsViewModel } from './ProgramDetailsListItemItemsViewModel';

export interface LandingInfo {
    events: Array<PlatformEvent>;
    news: Array<PlatformNews>;
    follows: FollowDetailsListItemItemsViewModel;
    programs: ProgramDetailsListItemItemsViewModel;
    funds: FundDetailsListItemItemsViewModel;
}

