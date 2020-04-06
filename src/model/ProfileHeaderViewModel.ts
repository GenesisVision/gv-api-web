import { Currency } from './Currency';

export interface ProfileHeaderViewModel {
    id: string;
    name: string;
    email: string;
    url: string;
    avatar: string;
    logoUrl: string;
    countryCode: string;
    notificationsCount: number;
    isKycConfirmed: boolean;
    isForexAllowed: boolean;
    isTwoFactorEnabled: boolean;
    isNewUser: boolean;
    isPublicInvestor: boolean;
    isBetaTester: boolean;
    isUserNameFilled: boolean;
    platformCurrency: Currency;
}

