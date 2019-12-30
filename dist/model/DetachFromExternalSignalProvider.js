import ApiClient from "../ApiClient";
export class DetachFromExternalSignalProvider {
    constructor(data) {
        this['tradingAccountId'] = data['tradingAccountId'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DetachFromExternalSignalProvider({
                'tradingAccountId': ApiClient.convertToType(data['tradingAccountId'], 'string'),
            });
        }
    }
}
