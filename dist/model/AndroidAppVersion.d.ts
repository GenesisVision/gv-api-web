import { AndroidVersion } from './AndroidVersion';
export declare class AndroidAppVersion {
    'minVersion'?: AndroidVersion;
    'lastVersion'?: AndroidVersion;
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: AndroidAppVersion): AndroidAppVersion;
}
