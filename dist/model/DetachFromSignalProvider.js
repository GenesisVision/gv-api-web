import { SignalDetachMode } from './SignalDetachMode';
export class DetachFromSignalProvider {
    static constructFromObject(data, obj = new DetachFromSignalProvider()) {
        if (data) {
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = SignalDetachMode.constructFromObject(data['mode']);
            }
        }
        return obj;
    }
}
