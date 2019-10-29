import { SignalDetachMode } from './signalDetachMode';
export class DetachFromSignalProvider {
    constructor() {
    }
    static constructFromObject(data, obj = new DetachFromSignalProvider()) {
        if (data) {
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = SignalDetachMode.constructFromObject(data['mode']);
            }
        }
        return obj;
    }
}
