import { BetaTestingType } from './BetaTestingType';
import { Tag } from './Tag';
import { UsersSocialLinkInfo } from './UsersSocialLinkInfo';

export interface UsersPlatformInfo {
    tags: Array<Tag>;
    availableBetaFeatures: Array<BetaTestingType>;
    socialLinkTypes: Array<UsersSocialLinkInfo>;
}

