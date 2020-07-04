import { PublicProfilePersonalDetails } from './PublicProfilePersonalDetails';

export interface ProfilePublicShort {
    id: string;
    username: string;
    url: string;
    logoUrl: string;
    personalDetails: PublicProfilePersonalDetails;
}

