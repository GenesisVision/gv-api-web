import { AndroidAppVersion } from './AndroidAppVersion';
import { IOsAppVersion } from './IOsAppVersion';
export declare class AppVersion {
    'iOS': IOsAppVersion;
    'android': AndroidAppVersion;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AppVersion | undefined;
}
