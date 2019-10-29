import { AndroidVersion } from './androidVersion';
export declare class AndroidAppVersion {
    'minVersion'?: AndroidVersion;
    'lastVersion'?: AndroidVersion;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: AndroidAppVersion): AndroidAppVersion;
}
