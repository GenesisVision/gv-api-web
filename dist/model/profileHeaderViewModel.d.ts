export declare class ProfileHeaderViewModel {
    'id'?: string;
    'name'?: string;
    'email'?: string;
    'avatar'?: string;
    'countryCode'?: string;
    'notificationsCount'?: number;
    'favoritesCount'?: number;
    'kycConfirmed'?: boolean;
    'allowForex'?: boolean;
    'isTwoFactorEnabled'?: boolean;
    'isNewUser'?: boolean;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ProfileHeaderViewModel): ProfileHeaderViewModel;
}
