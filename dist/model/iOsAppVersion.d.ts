export declare class IOsAppVersion {
    'minVersion'?: string;
    'lastVersion'?: string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: IOsAppVersion): IOsAppVersion;
}
