import { AndroidAppVersion } from './AndroidAppVersion';
import { IOsAppVersion } from './IOsAppVersion';
export class AppVersion {
    constructor(data) {
        this['iOS'] = data['iOS'];
        this['android'] = data['android'];
    }
    static constructFromObject(data) {
        if (data) {
            return new AppVersion({
                'iOS': IOsAppVersion.constructFromObject(data['iOS']),
                'android': AndroidAppVersion.constructFromObject(data['android']),
            });
        }
    }
}
