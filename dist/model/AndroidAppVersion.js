import { AndroidVersion } from './AndroidVersion';
export class AndroidAppVersion {
    constructor(data) {
        this['minVersion'] = data['minVersion'];
        this['lastVersion'] = data['lastVersion'];
    }
    static constructFromObject(data) {
        if (data) {
            return new AndroidAppVersion({
                'minVersion': AndroidVersion.constructFromObject(data['minVersion']),
                'lastVersion': AndroidVersion.constructFromObject(data['lastVersion']),
            });
        }
    }
}
