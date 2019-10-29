import { AndroidAppVersion } from './androidAppVersion';
import { IOsAppVersion } from './iOsAppVersion';
export declare class AppVersion {
    'iOS'?: IOsAppVersion;
    'android'?: AndroidAppVersion;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: AppVersion): AppVersion;
}
