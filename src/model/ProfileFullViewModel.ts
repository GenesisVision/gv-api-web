import { Currency } from './Currency';
import { SocialViewMode } from './SocialViewMode';
import { UserVerificationStatus } from './UserVerificationStatus';

export interface ProfileFullViewModel {
    id: string;
    email: string;
    firstName: string;
    middleName: string;
    lastName: string;
    country: string;
    city: string;
    address: string;
    phone: string;
    phoneNumberConfirmed: boolean;
    birthday: Date;
    gender: boolean;
    logoUrl: string;
    about: string;
    userName: string;
    index: string;
    citizenship: string;
    refUrl: string;
    verificationStatus: UserVerificationStatus;
    isPublicInvestor: boolean;
    platformCurrency: Currency;
    whoCanPostToMayWall: SocialViewMode;
    whoCanCommentOnMyPosts: SocialViewMode;
    whoCanViewCommentsOnMyPosts: SocialViewMode;
}

