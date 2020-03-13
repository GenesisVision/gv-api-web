export interface ProfileHeaderViewModel {
    id: string;
    name: string;
    email: string;
    url: string;
    avatar: string;
    countryCode: string;
    notificationsCount: number;
    isKycConfirmed: boolean;
    isForexAllowed: boolean;
    isTwoFactorEnabled: boolean;
    isNewUser: boolean;
    isPublicInvestor: boolean;
    isUserNameFilled: boolean;
}

