import { AndroidVersion } from './AndroidVersion';
export declare class AndroidAppVersion {
    'minVersion': AndroidVersion;
    'lastVersion': AndroidVersion;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): AndroidAppVersion;
}
