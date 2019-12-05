import ApiClient from "../ApiClient";
export class ProfileHeaderViewModel {
    constructor(data) {
        this['id'] = data['id'];
        this['name'] = data['name'];
        this['email'] = data['email'];
        this['url'] = data['url'];
        this['avatar'] = data['avatar'];
        this['countryCode'] = data['countryCode'];
        this['notificationsCount'] = data['notificationsCount'];
        this['isKycConfirmed'] = data['isKycConfirmed'];
        this['isForexAllowed'] = data['isForexAllowed'];
        this['isTwoFactorEnabled'] = data['isTwoFactorEnabled'];
        this['isNewUser'] = data['isNewUser'];
        this['isPublicInvestor'] = data['isPublicInvestor'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProfileHeaderViewModel({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'name': ApiClient.convertToType(data['name'], 'string'),
                'email': ApiClient.convertToType(data['email'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'avatar': ApiClient.convertToType(data['avatar'], 'string'),
                'countryCode': ApiClient.convertToType(data['countryCode'], 'string'),
                'notificationsCount': ApiClient.convertToType(data['notificationsCount'], 'number'),
                'isKycConfirmed': ApiClient.convertToType(data['isKycConfirmed'], 'boolean'),
                'isForexAllowed': ApiClient.convertToType(data['isForexAllowed'], 'boolean'),
                'isTwoFactorEnabled': ApiClient.convertToType(data['isTwoFactorEnabled'], 'boolean'),
                'isNewUser': ApiClient.convertToType(data['isNewUser'], 'boolean'),
                'isPublicInvestor': ApiClient.convertToType(data['isPublicInvestor'], 'boolean'),
            });
        }
    }
}
