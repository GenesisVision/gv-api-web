export declare class AndroidVersion {
    'versionCode'?: string;
    'versionName'?: string;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: AndroidVersion): AndroidVersion;
}
