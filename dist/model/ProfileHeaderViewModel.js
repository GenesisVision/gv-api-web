import ApiClient from "../ApiClient";
export class ProfileHeaderViewModel {
    constructor(data) {
        this['id'] = data['id'];
        this['name'] = data['name'];
        this['email'] = data['email'];
        this['avatar'] = data['avatar'];
        this['countryCode'] = data['countryCode'];
        this['notificationsCount'] = data['notificationsCount'];
        this['favoritesCount'] = data['favoritesCount'];
        this['kycConfirmed'] = data['kycConfirmed'];
        this['allowForex'] = data['allowForex'];
        this['isTwoFactorEnabled'] = data['isTwoFactorEnabled'];
        this['isNewUser'] = data['isNewUser'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProfileHeaderViewModel({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'name': ApiClient.convertToType(data['name'], 'string'),
                'email': ApiClient.convertToType(data['email'], 'string'),
                'avatar': ApiClient.convertToType(data['avatar'], 'string'),
                'countryCode': ApiClient.convertToType(data['countryCode'], 'string'),
                'notificationsCount': ApiClient.convertToType(data['notificationsCount'], 'number'),
                'favoritesCount': ApiClient.convertToType(data['favoritesCount'], 'number'),
                'kycConfirmed': ApiClient.convertToType(data['kycConfirmed'], 'boolean'),
                'allowForex': ApiClient.convertToType(data['allowForex'], 'boolean'),
                'isTwoFactorEnabled': ApiClient.convertToType(data['isTwoFactorEnabled'], 'boolean'),
                'isNewUser': ApiClient.convertToType(data['isNewUser'], 'boolean'),
            });
        }
    }
}
