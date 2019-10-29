import { AndroidAppVersion } from './androidAppVersion';
import { IOsAppVersion } from './iOsAppVersion';
export class AppVersion {
    constructor() {
    }
    static constructFromObject(data, obj = new AppVersion()) {
        if (data) {
            if (data.hasOwnProperty('iOS')) {
                obj['iOS'] = IOsAppVersion.constructFromObject(data['iOS']);
            }
            if (data.hasOwnProperty('android')) {
                obj['android'] = AndroidAppVersion.constructFromObject(data['android']);
            }
        }
        return obj;
    }
}
