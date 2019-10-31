import { SignalDetachMode } from './SignalDetachMode';
import ApiClient from "../ApiClient";
export class DetachFromSignalProvider {
    constructor(data) {
        this['tradingAccountId'] = data['tradingAccountId'];
        this['mode'] = data['mode'];
    }
    static constructFromObject(data) {
        if (data) {
            return new DetachFromSignalProvider({
                'tradingAccountId': ApiClient.convertToType(data['tradingAccountId'], 'string'),
                'mode': SignalDetachMode.constructFromObject(data['mode']),
            });
        }
    }
}
