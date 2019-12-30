import ApiClient from "../ApiClient";
export class ProgramFollowDetailsFullTradingAccountDetails {
    constructor(data) {
        this['id'] = data['id'];
        this['login'] = data['login'];
        this['currency'] = data['currency'];
        this['leverageMin'] = data['leverageMin'];
        this['leverageMax'] = data['leverageMax'];
        this['balance'] = data['balance'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramFollowDetailsFullTradingAccountDetails({
                'id': ApiClient.convertToType(data['id'], 'string'),
                'login': ApiClient.convertToType(data['login'], 'string'),
                'currency': ApiClient.convertToType(data['currency'], 'string'),
                'leverageMin': ApiClient.convertToType(data['leverageMin'], 'number'),
                'leverageMax': ApiClient.convertToType(data['leverageMax'], 'number'),
                'balance': ApiClient.convertToType(data['balance'], 'number'),
            });
        }
    }
}
