import { ProfilePublicShort } from './ProfilePublicShort';

export interface PublicProfileFollow {
    followers: Array<ProfilePublicShort>;
    following: Array<ProfilePublicShort>;
}

