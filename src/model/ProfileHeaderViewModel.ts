import { BetaTestingType } from './BetaTestingType';
import { Currency } from './Currency';

export interface ProfileHeaderViewModel {
    id: string;
    name: string;
    email: string;
    url: string;
    logoUrl: string;
    countryCode: string;
    notificationsCount: number;
    isKycConfirmed: boolean;
    isForexAllowed: boolean;
    isCountryUS: boolean;
    isTwoFactorEnabled: boolean;
    isNewUser: boolean;
    isPublicInvestor: boolean;
    hasPassword: boolean;
    hasEmailAddress: boolean;
    betaTester: Array<BetaTestingType>;
    isUserNameFilled: boolean;
    platformCurrency: Currency;
}

