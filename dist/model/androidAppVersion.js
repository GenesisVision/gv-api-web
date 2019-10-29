import { AndroidVersion } from './androidVersion';
export class AndroidAppVersion {
    constructor() {
    }
    static constructFromObject(data, obj = new AndroidAppVersion()) {
        if (data) {
            if (data.hasOwnProperty('minVersion')) {
                obj['minVersion'] = AndroidVersion.constructFromObject(data['minVersion']);
            }
            if (data.hasOwnProperty('lastVersion')) {
                obj['lastVersion'] = AndroidVersion.constructFromObject(data['lastVersion']);
            }
        }
        return obj;
    }
}
