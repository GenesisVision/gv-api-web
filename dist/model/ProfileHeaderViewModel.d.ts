export declare class ProfileHeaderViewModel {
    'id': string;
    'name': string;
    'email': string;
    'url': string;
    'avatar': string;
    'countryCode': string;
    'notificationsCount': number;
    'isKycConfirmed': boolean;
    'isForexAllowed': boolean;
    'isTwoFactorEnabled': boolean;
    'isNewUser': boolean;
    'isPublicInvestor': boolean;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProfileHeaderViewModel | undefined;
}
